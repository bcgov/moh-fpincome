import { APP_ROUTES } from '../app.constants';


/** Name of each page */
export const PAGE_NAMES = {
  home: 'Home',
  review: 'Review'
};

/** Page route information */
export const INCOME_REVIEW_PAGES = {
  HOME: {
      path: PAGE_NAMES.home,
      fullpath: `${APP_ROUTES.income_review}/${PAGE_NAMES.home}`,
      title: PAGE_NAMES.home
  },
  REVIEW: {
    path: PAGE_NAMES.review,
    fullpath: `${APP_ROUTES.income_review}/${PAGE_NAMES.review}`,
    title: PAGE_NAMES.review
  }
};

export const FORM_SUBMIT_LABEL = 'Submit';
