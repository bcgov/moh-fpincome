import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeReviewRoutingModule } from './income-review-routing.module';
import { IncomeReviewContainerComponent } from './component/income-review-container/income-review-container.component';


@NgModule({
  declarations: [IncomeReviewContainerComponent],
  imports: [
    CommonModule,
    IncomeReviewRoutingModule
  ]
})
export class IncomeReviewModule { }
