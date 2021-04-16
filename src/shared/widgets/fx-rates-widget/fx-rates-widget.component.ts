import { DecimalPipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import { environment_api } from './../../../environments/environment.api';

@Component({
  selector: "app-fx-rates-widget",
  templateUrl: "./fx-rates-widget.component.html",
  styleUrls: ["./fx-rates-widget.component.css"]
})
export class FXRatesWidgetComponent implements OnInit {
  fxRates: FXRate;
  options: string[] = [];
  buyCurrency: string;
  buyAmount: number;
  sellCurrency: string;
  sellAmount: number;

  loading: boolean = false;
  error: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.getCurrencyOptions((options) => {
      // set defaults
      this.buyCurrency = 'EUR';
      this.buyAmount = 1;
      this.sellCurrency = 'USD';
      // calculate
      this.getExchangeRates();
    });
  }

  getCurrencyOptions(callback: (options: string[]) => void) {
    this.http.options<string[]>(environment_api.api_url + `fxrates`).subscribe(
      result => {
        this.options = result;
        callback(this.options);
      },
      error => console.error(error)
    );
  }

  getExchangeRates() {
    this.loading = true;
    this.error = false;
    this.fxRates = null;
    this.http.get<FXRate>(environment_api.api_url + `fxrates/${this.buyCurrency}`).subscribe(
      result => {
        this.loading = false
        this.fxRates = result;
        this.buyAmount = 1;
        this.calculateSellAmount();
      },
      error => {
        console.error(error);
        this.loading = false;
        this.error = true;
        this.sellCurrency = null;
        this.sellAmount = null;
      }
    );
  }

  buyCurrencyChanged() {
    this.getExchangeRates();
  }

  buyAmountChanged(amount) {
    this.buyAmount = amount;
    this.calculateSellAmount();
  }

  sellCurrencyChanged() {
    this.calculateSellAmount();
  }

  sellAmountChanged(amount) {
    this.sellAmount = amount;
    this.calculateBuyAmount();
  }

  calculateSellAmount(): number {
    if (this.buyCurrency && this.buyAmount && this.sellCurrency) {
      const conversionRate = this.fxRates.rates[this.sellCurrency];
      this.sellAmount = this.buyAmount * conversionRate;
    } else {
      this.sellAmount = null;
    }
    return this.sellAmount;
  }

  calculateBuyAmount(): number {
    if (this.sellCurrency && this.sellAmount && this.buyCurrency) {
      const conversionRate = this.fxRates.rates[this.sellCurrency];
      this.buyAmount = this.sellAmount / conversionRate;
    } else {
      this.buyAmount = null;
    }
    return this.buyAmount;
  }

  get conversionInfoText(): string {
    // invalid fx rates
    if (!this.fxRates) return 'Error: Failed to get currency exchange rates';

    if (!this.buyCurrency || !this.sellCurrency) return null;

    const conversionRate = this.fxRates.rates[this.sellCurrency];
    return `1 ${this.buyCurrency} = ${conversionRate} ${this.sellCurrency}`;
  }

}

interface FXRate {
  date: string;
  base: string;
  rates: string;
}
