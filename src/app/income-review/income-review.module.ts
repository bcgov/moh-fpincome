import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeReviewRoutingModule } from './income-review-routing.module';
import { IncomeReviewComponent } from './income-review.component';


@NgModule({
  declarations: [IncomeReviewComponent],
  imports: [
    CommonModule,
    IncomeReviewRoutingModule
  ]
})
export class IncomeReviewModule { }
