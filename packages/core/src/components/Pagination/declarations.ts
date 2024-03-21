import type { TBaseSize } from '../../declarations/commonProps';
import type { IGlobalAttrs } from '../../declarations/htmlAttrs';
import type { IStyledOverloadCss } from '../../declarations/styled';
import type { IPaginationInfo } from './hooks/declarations';

export type TItem = string | number;

export interface IPaginationCommonInterface
  extends Pick<IGlobalAttrs, 'id'>,
    IStyledOverloadCss {
  /** If you want to override pagination internal state, use the usePagination hook in the parent and pass the props. */
  paginationHook?: IPaginationInfo;
  /** The size for every inner component; SelectControls, IconButtons... etc. */
  size?: TBaseSize;
  /** Texts for tooltips and accessibility: aria-labels... etc. */
  texts?: TTextProps;
}

type TSelectPageTooltipTextFnParams = {
  currentPage: number;
  lastPage: number;
};

type TInfoTextFnParams = {
  totalItems: number;
  pageSize: number;
  pageFirstItem: number;
  pageLastItem: number;
};

type TInfoTextFn = (params: TInfoTextFnParams) => string;

type TSelectPageTooltipTextFn = (
  params: TSelectPageTooltipTextFnParams,
) => string;

export type TTextProps = {
  firstPageTooltipText: string;
  infoTextFn: TInfoTextFn;
  lastPageTooltipText: string;
  nextPageTooltipText: string;
  pageSelectorLabel: string;
  prevPageTooltipText: string;
  rangeText: string;
  selectPageTooltipTextFn: TSelectPageTooltipTextFn;
};
