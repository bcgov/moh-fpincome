import { INCOME_REVIEW_PAGES, PAGE_NAMES } from './income-review.constants';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReviewComponent } from './pages/review/review.component';

/** The individual page routes only, does not include container */
export const incomeReviewPageRoutes: Routes = [
  {
    path: '',
    redirectTo: INCOME_REVIEW_PAGES.HOME.path,
    pathMatch: 'full'
  },
  {
    path: PAGE_NAMES.home,
    component: HomeComponent,
    data: { title: PAGE_NAMES.home }
  },
  {
    path: PAGE_NAMES.review,
    component: ReviewComponent,
    data: { title: PAGE_NAMES.review }
  }
];
