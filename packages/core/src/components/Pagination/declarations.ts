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
  pageSize?: number;
  pageSizeOptions?: number[];
  goToFirstPage?: TGoToFn;
  goToLastPage?: TGoToFn;
  goToNextPage?: TGoToFn;
  goToPreviousPage?: TGoToFn;
  goToPage?: (pageNumber: number) => void;
  setPageSize?: (newPageSize: number) => void;
  setPage?: (page: number) => void;
  onChange?: (page: number) => void;
  onPageSizeChange?: (page: number) => void;
  page?: number;
  lastPage?: number;
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
  rangeText?: string;
  selectPageTooltipTextFn?: TSelectPageTooltipTextFn;
};
