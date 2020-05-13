import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncomeReviewComponent } from './income-review.component';
import { incomeReviewPageRoutes } from './income-review-pages.route';


const routes: Routes = [
  {
    path: '',
    component: IncomeReviewComponent,
    children: incomeReviewPageRoutes
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeReviewRoutingModule { }
