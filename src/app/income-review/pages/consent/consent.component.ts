import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BaseForm } from '../../models/base-form';
import { Router } from '@angular/router';
import {
  ContainerService,
  PageStateService,
  CommonLogEvents,
} from 'moh-common-lib';
import { IncomeReviewDataService } from '../../services/income-review-data.service';
import {
  FORM_SUBMIT_LABEL,
  INCOME_REVIEW_PAGES,
} from '../../income-review.constants';
import { FormBuilder, Validators } from '@angular/forms';
import { IncomeReviewApiService } from '../../services/income-review-api.service';
import { SplunkLoggingService } from '../../../services/splunk-logging.service';
import { ServerPayload } from '../../models/review-income-api';

@Component({
  selector: 'fpir-consent',
  templateUrl: './consent.component.html',
})
export class ConsentComponent extends BaseForm
  implements OnInit, AfterViewInit {
  constructor(
    protected router: Router,
    protected containerService: ContainerService,
    protected pageStateService: PageStateService,
    private incomeReviewDataService: IncomeReviewDataService,
    private incomeReviewApiService: IncomeReviewApiService,
    private splunkLoggingService: SplunkLoggingService,
    private fb: FormBuilder
  ) {
    super(router, containerService, pageStateService);
  }

  get hasSpouse() {
    return this.incomeReviewDataService.hasSpouse;
  }

  get registrantConsentStmt() {
    return `I consent [${this.incomeReviewDataService.applicant.name}]`;
  }

  get spouseConsentStmt() {
    return `I consent [${this.incomeReviewDataService.spouse.name}]`;
  }

  /**
   * NOTE: Work-around until checkbox component is fixed in library, not compatiable with reactive forms
   */
  get isChecked() {
    let _isChecked = !!this.incomeReviewDataService.applicant.consent;

    if (this.hasSpouse) {
      _isChecked = _isChecked && !!this.incomeReviewDataService.spouse.consent;
    }
    return _isChecked;
  }

  get isTouched() {
    let _isTouched = this.formGroup.controls.registrantConsent.touched;
    if (this.hasSpouse) {
      _isTouched = _isTouched && this.formGroup.controls.spouseConsent.touched;
    }
    return _isTouched;
  }

  ngOnInit() {
    // Override BaseForm init method
    this.containerService.setSubmitLabel(FORM_SUBMIT_LABEL);
    this.containerService.setUseDefaultColor(false);

    this.formGroup = this.fb.group({
      registrantConsent: [
        this.incomeReviewDataService.applicant.consent,
        Validators.required,
      ],
      spouseConsent: [
        this.incomeReviewDataService.spouse.consent,
        Validators.required,
      ],
    });
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();

    // subscrib to value changes
    this.formGroup.controls.registrantConsent.valueChanges.subscribe(
      (val) => (this.incomeReviewDataService.applicant.consent = val)
    );
    this.formGroup.controls.spouseConsent.valueChanges.subscribe(
      (val) => (this.incomeReviewDataService.spouse.consent = val)
    );
  }

  continue() {
    this.markAllInputsTouched();

    /**
     * NOTE: Work-around until checkbox component is fixed in library, not compatiable with reactive forms
     */
    if (this.canContinue() && this.isChecked) {
      this.containerService.setIsLoading(true);
      const jsonPayload = this.incomeReviewDataService.applicationPayload;
      const supportDocuments = this.incomeReviewDataService
        .consolidateDocuments;

      this.incomeReviewApiService
        .submitApplication(jsonPayload, supportDocuments)
        .then(
          (res: ServerPayload) => {
            this.incomeReviewDataService.applicationResponse = res;
            this.splunkLoggingService.log({
              event: CommonLogEvents.submission,
              request: 'Income Review Application',
              success:
                this.incomeReviewDataService.applicationResponse.success ||
                this.incomeReviewDataService.applicationResponse.warning,
              response: res,
            });

            this.containerService.setIsLoading(false);
            this.navigate(INCOME_REVIEW_PAGES.CONFIRMATION.fullpath);
          },
          (error) => {
            this.containerService.setIsLoading(false);

            this.splunkLoggingService.log({
              event: CommonLogEvents.submission,
              request: 'Income Review Application - failure',
              response: error,
            });
            this.navigate(INCOME_REVIEW_PAGES.CONFIRMATION.fullpath);
          }
        )
        .catch((err: Response | any) => {
          this.containerService.setIsLoading(false);

          this.splunkLoggingService.log({
            event: CommonLogEvents.submission,
            request: 'Income Review Application - failure (catch stmt)',
            response: err,
          });
        });
    }
  }
}
