import { Component, OnInit } from '@angular/core';
import { BaseForm } from '../../models/base-form';
import { Router } from '@angular/router';
import { ContainerService } from 'moh-common-lib';
import { INCOME_REVIEW_PAGES, FORM_SUBMIT_LABEL } from '../../income-review.constants';

@Component({
  selector: 'fpir-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent extends BaseForm implements OnInit {

  constructor( protected router: Router,
               protected containerService: ContainerService ) {
    super( router, containerService );
   }

   ngOnInit() {
    // Override BaseForm init method
    this.containerService.setSubmitLabel( FORM_SUBMIT_LABEL );
    this.containerService.setUseDefaultColor( false );
   }

}
