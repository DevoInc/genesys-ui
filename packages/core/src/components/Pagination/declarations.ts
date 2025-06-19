import type { TBaseSize } from '../../declarations/commonProps';
import type { IDataAttrs, IGlobalAttrs } from '../../declarations/htmlAttrs';
import type { IStyledOverloadCss } from '../../declarations/styled';

export type TItem = string | number;

export type TGoToFn = ({
  page,
  pageSize,
  totalItems,
}: {
  page: number;
  pageSize: number;
  totalItems: number;
}) => number;

export interface IPaginationCommonInterface
  extends Pick<IGlobalAttrs, 'id'>,
    IDataAttrs,
    IStyledOverloadCss {
  /** The size for every inner component; SelectControls, IconButtons... etc. */
  size?: TBaseSize;
  /** Texts for tooltips and accessibility: aria-labels... etc. */
  texts?: TTextProps;
  /** The size (number of items) for each page. */
  pageSize?: number;
  /** The size options to be used in the selector. */
  pageSizeOptions?: number[];
  /** The function to be launched when it's clicked the 'Go to the first page' action. */
  goToFirstPage?: TGoToFn;
  /** The function to be launched when it's clicked the 'Go to the last page' action. */
  goToLastPage?: TGoToFn;
  /** The function to be launched when it's clicked the 'Go to the next page' action. */
  goToNextPage?: TGoToFn;
  /** The function to be launched when it's clicked the 'Go to the previous page' action. */
  goToPreviousPage?: TGoToFn;
  /** The function to be launched when it's clicked the 'Go to page' action. */
  goToPage?: (pageNumber: number) => void;
  /** The function to be launched when it's set the page size. */
  setPageSize?: (newPageSize: number) => void;
  /** The function to be launched when it's set the page. */
  setPage?: (page: number) => void;
  /** The function to be launched on change. */
  onChange?: (page: number) => void;
  /** The function to be launched on page size change. */
  onPageSizeChange?: (page: number) => void;
  /** The number of the current page. */
  page?: number;
  /** The number of the last page. */
  lastPage?: number;
  /** The total number of the items. */
  totalItems?: number;
}

type TSelectPageTooltipTextFnParams = {
  totalItems: number;
  pageSize: number;
  page: number;
};

type TInfoTextFnParams = {
  totalItems: number;
  pageSize: number;
  page: number;
};

type TInfoTextFn = (params: TInfoTextFnParams) => string;

type TSelectPageTooltipTextFn = (
  params: TSelectPageTooltipTextFnParams,
) => string;

export type TTextProps = {
  firstPageTooltipText?: string;
  infoTextFn?: TInfoTextFn;
  lastPageTooltipText?: string;
  nextPageTooltipText?: string;
  pageSelectorLabel?: string;
  prevPageTooltipText?: string;
  rangeLabel?: string;
  rangeText?: string;
  selectPageTooltipTextFn?: TSelectPageTooltipTextFn;
};
