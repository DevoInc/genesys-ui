import { clamp } from '../data';
import { getLastPage } from './pages';

export const goToLastPageFn = ({ totalItems, pageSize }) =>
  getLastPage(totalItems, pageSize);

export const goToNextPageFn = ({ totalItems, pageSize, page }) =>
  clamp(getLastPage(totalItems, pageSize), page + 1);

export const goToPreviousPageFn = ({ totalItems, pageSize, page }) =>
  clamp(getLastPage(totalItems, pageSize), page - 1);
