import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { IncomeReviewDataService } from '../../services/income-review-data.service';
import { SplunkLoggingService } from '../../../services/splunk-logging.service';
import { SupportDocsComponent } from './support-docs.component';

describe('SupportDocsComponent', () => {
  let component: SupportDocsComponent;
  let fixture: ComponentFixture<SupportDocsComponent>;

  beforeEach(() => {
    const incomeReviewDataServiceStub = () => ({});
    const splunkLoggingServiceStub = () => ({ logError: (object) => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SupportDocsComponent],
      providers: [
        {
          provide: IncomeReviewDataService,
          useFactory: incomeReviewDataServiceStub,
        },
        { provide: SplunkLoggingService, useFactory: splunkLoggingServiceStub },
      ],
    });
    fixture = TestBed.createComponent(SupportDocsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
