import { Component } from "@angular/core";
import { TopBarService } from "@shared/services/top-bar.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent {
  constructor(private topBarService: TopBarService) {}

  /**
   * On init
   */
  ngOnInit() {
    this.topBarService.setTitle("Dashboard");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
