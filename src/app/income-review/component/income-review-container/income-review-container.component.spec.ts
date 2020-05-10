import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeReviewContainerComponent } from './income-review-container.component';

describe('IncomeReviewContainerComponent', () => {
  let component: IncomeReviewContainerComponent;
  let fixture: ComponentFixture<IncomeReviewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeReviewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeReviewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
