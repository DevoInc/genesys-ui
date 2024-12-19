import { infoTextFn, selectPageTooltipTextFn } from './helpers';

export const DEFAULT_PAGE_SIZE = 20;

export const DEFAULT_PAGE_SIZE_OPTIONS = [5, 10, 15, 20];

export const DEFAULT_TEXTS = {
  firstPageTooltipText: 'First page',
  infoTextFn: infoTextFn,
  lastPageTooltipText: 'Last page',
  nextPageTooltipText: 'Next page',
  pageSelectorLabel: 'Page selector',
  prevPageTooltipText: 'Previous page',
  rangeText: 'items per page',
  selectPageTooltipTextFn: selectPageTooltipTextFn,
};
