import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { DailyHistoryComponent } from './daily-history/daily-history.component';
import { MonthlyHistoryComponent } from './monthly-history/monthly-history.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { CashComponent } from './cash/cash.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'Daily History', component: DailyHistoryComponent },
  { path: 'Monthly History', component: MonthlyHistoryComponent },
  { path: 'Utilities', component: UtilitiesComponent },
  { path: 'Cash Projection', component: CashComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
