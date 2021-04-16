import { CommonModule, DecimalPipe } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TopBarComponent } from "./layout/top-bar/top-bar.component";
import { FXRatesWidgetComponent } from "./widgets/fx-rates-widget/fx-rates-widget.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [DecimalPipe],
  declarations: [TopBarComponent, FXRatesWidgetComponent],
  exports: [TopBarComponent, FXRatesWidgetComponent],
})
export class SharedModule { }
