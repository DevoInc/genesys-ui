import {
  BaseSize,
  GlobalAttrProps,
  StyledOverloadCssProps,
} from '../../declarations';
import { PaginationInfo } from './hooks';

export type Item = string | number;

export interface PaginationCommonInterface
  extends Pick<GlobalAttrProps, 'id'>,
    StyledOverloadCssProps {
  /** If you want to override pagination internal state, use the usePagination hook in the parent and pass the props. */
  paginationHook?: PaginationInfo;
  size?: BaseSize;
  /** Texts for tooltips and accessibility: aria-labels... etc. */
  texts?: TextProps;
}

interface SelectPageTooltipTextFnParams {
  currentPage: number;
  lastPage: number;
}

interface InfoTextFnParams {
  totalItems: number;
  pageSize: number;
  pageFirstItem: number;
  pageLastItem: number;
}

type InfoTextFn = (params: InfoTextFnParams) => string;
type SelectPageTooltipTextFn = (
  params: SelectPageTooltipTextFnParams,
) => string;

export const defaultTexts = {
  firstPageTooltipText: 'First page',
  infoTextFn: ({ totalItems, pageSize, pageFirstItem, pageLastItem }) => {
    return pageSize > totalItems
      ? `${totalItems} items`
      : `${pageFirstItem} - ${pageLastItem} of ${totalItems} items`;
  },
  lastPageTooltipText: 'Last page',
  nextPageTooltipText: 'Next page',
  pageSelectorLabel: 'Page selector',
  prevPageTooltipText: 'Previous page',
  rangeText: 'items per page',
  selectPageTooltipTextFn: ({ currentPage, lastPage }) =>
    `Page ${currentPage} of ${lastPage}`,
};

export interface TextProps {
  firstPageTooltipText: string;
  infoTextFn: InfoTextFn;
  lastPageTooltipText: string;
  nextPageTooltipText: string;
  pageSelectorLabel: string;
  prevPageTooltipText: string;
  rangeText: string;
  selectPageTooltipTextFn: SelectPageTooltipTextFn;
}

export interface HideParts {
  infoLabel: boolean;
  rangeSelector: boolean;
  firstPageBtn: boolean;
  prevPageBtn: boolean;
  nextPageBtn: boolean;
  lastPageBtn: boolean;
}
