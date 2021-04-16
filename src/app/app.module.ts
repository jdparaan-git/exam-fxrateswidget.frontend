import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "@shared/shared.module";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot([{ path: "", component: DashboardComponent }])
  ],
  declarations: [AppComponent, DashboardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
