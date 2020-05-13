import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Container, ContainerService } from 'moh-common-lib';
import { incomeReviewPageRoutes } from './income-review-pages.route';


@Component({
  selector: 'fpir-income-review',
  templateUrl: './income-review.component.html',
  styleUrls: ['./income-review.component.scss']
})
export class IncomeReviewComponent extends Container implements AfterViewInit, OnDestroy  {

  constructor( protected containerService: ContainerService ) {
    super( containerService );

    this.setProgressSteps( incomeReviewPageRoutes );
  }

  ngOnDestroy(): void {
    this.unsubscribeFormBar();
  }

  ngAfterViewInit(): void {
    this.subscribeFormBar();
  }
}
