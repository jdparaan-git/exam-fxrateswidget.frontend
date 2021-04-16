import { Component } from "@angular/core";
import { TopBarService } from "@shared/services/top-bar.service";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.css"]
})
export class TopBarComponent {
  title: string = "";
  constructor(private topBarService: TopBarService) {}

  /**
   * On init
   */
  ngOnInit() {
    this.topBarService.title$.subscribe(title => {
      this.title = title;
    });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
