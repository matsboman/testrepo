import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DailyHistoryComponent } from './daily-history/daily-history.component';
import { MonthlyHistoryComponent } from './monthly-history/monthly-history.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { CashComponent } from './cash/cash.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DailyHistoryComponent,
    MonthlyHistoryComponent,
    UtilitiesComponent,
    CashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
