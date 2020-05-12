import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncomeReviewComponent } from './income-review.component';

const routes: Routes = [
  {
    path: '',
    component: IncomeReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeReviewRoutingModule { }
