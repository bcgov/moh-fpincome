import { ContainerService, AbstractReactForm } from 'moh-common-lib';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OnInit, AfterViewInit, OnDestroy } from '@angular/core';

export class BaseForm extends AbstractReactForm implements OnInit, AfterViewInit, OnDestroy {

  private _subscription: Subscription;

  constructor( protected router: Router,
               protected containerService: ContainerService ) {
    super(router);
  }

  ngOnInit() {
    // Default behaviour for most pages - override if need different functionality
    this.containerService.setSubmitLabel();
    this.containerService.setUseDefaultColor();
  }

  ngAfterViewInit() {
    this._subscription = this.containerService.$continueBtn.subscribe(
      (obs) => {
        this.continue();
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  continue() {
    // console.log( 'Continue: base form to be overriden');
  }

  protected navigate( url: string ) {
    super.navigate(url);
  }
}
