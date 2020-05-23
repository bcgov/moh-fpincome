import { APP_ROUTES } from '../app.constants';

/** Name of each page */
const PAGE_NAMES = {
  home: 'requirements',
  personalInfo: 'personal-info',
  grossIncome: 'gross-income',
  supportDocs: 'supporting-docs',
  review: 'review',
  consent: 'consent',
  confirmation: 'confirmation',
};

/** Page route information */
export const INCOME_REVIEW_PAGES = {
  HOME: {
    path: PAGE_NAMES.home,
    fullpath: `${APP_ROUTES.income_review}/${PAGE_NAMES.home}`,
    title: PAGE_NAMES.home,
  },
  REVIEW: {
    path: PAGE_NAMES.review,
    fullpath: `${APP_ROUTES.income_review}/${PAGE_NAMES.review}`,
    title: PAGE_NAMES.review,
  },
  CONSENT: {
    path: PAGE_NAMES.consent,
    fullpath: `${APP_ROUTES.income_review}/${PAGE_NAMES.consent}`,
    title: PAGE_NAMES.consent,
  },
  CONFIRMATION: {
    path: PAGE_NAMES.confirmation,
    fullpath: `${APP_ROUTES.income_review}/${PAGE_NAMES.confirmation}`,
    title: PAGE_NAMES.confirmation,
  },
};

export const FORM_SUBMIT_LABEL = 'Submit';
export const SUCCESSFUL_CONFIRMATION_MSG =
  'Your application has been submitted.';
export const ERROR_CONFIRMATION_MSG = 'Submission of your application failed.';
