import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeReviewRoutingModule } from './income-review-routing.module';
import { IncomeReviewComponent } from './income-review.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedCoreModule } from 'moh-common-lib';
import { ReviewComponent } from './pages/review/review.component';


@NgModule({
  declarations: [
    IncomeReviewComponent,
    HomeComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,
    SharedCoreModule,
    IncomeReviewRoutingModule
  ]
})
export class IncomeReviewModule { }
