import * as React from 'react';

import type { StyledOverloadCssPropsWithRecord } from '../../declarations/styled';
import {
  defaultTexts,
  type HideParts,
  type PaginationCommonInterface,
} from './declarations';

import { Label } from '../Label';
import {
  PaginationContainer,
  type PaginationContainerProps,
} from './components/PaginationContainer';
import { PaginationNav } from './components/PaginationNav';
import { PaginationRange } from './components/PaginationRange';

const defaultHideParts = {
  infoLabel: false,
  rangeSelector: false,
  firstPageBtn: false,
  prevPageBtn: false,
  nextPageBtn: false,
  lastPageBtn: false,
};

export interface BasePaginationProps
  extends PaginationCommonInterface,
    Pick<
      PaginationContainerProps,
      'aria-label' | 'aria-describedby' | 'as' | 'WrapperComponent'
    > {
  hideParts?: HideParts;
}

export type PaginationProps = BasePaginationProps &
  StyledOverloadCssPropsWithRecord<'container' | 'info' | 'range' | 'nav'>;

export const InternalPagination: React.FC<PaginationProps> = ({
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  as = 'nav',
  hideParts = defaultHideParts,
  id,
  paginationHook,
  size = 'md',
  styles,
  subcomponentStyles,
  texts,
  WrapperComponent,
}) => {
  // State
  const { pageFirstItem, pageLastItem, totalItems, pageSize } = React.useMemo(
    () => paginationHook,
    [paginationHook],
  );

  // Constants
  const { infoTextFn } = React.useMemo(
    () => ({ ...defaultTexts, ...texts }),
    [texts],
  );

  const paginationInfoText = React.useMemo(
    () =>
      infoTextFn({
        totalItems,
        pageSize,
        pageFirstItem: pageFirstItem + 1,
        pageLastItem: pageLastItem + 1,
      }),
    [infoTextFn, totalItems, pageSize, pageFirstItem, pageLastItem],
  );

  return (
    <PaginationContainer
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      as={as}
      id={id}
      size={size}
      styles={subcomponentStyles?.container || styles}
      WrapperComponent={WrapperComponent}
    >
      {!hideParts?.infoLabel && (
        <Label size={size} styles={subcomponentStyles?.info}>
          {paginationInfoText}
        </Label>
      )}
      {!hideParts?.rangeSelector && (
        <PaginationRange
          id={id}
          paginationHook={paginationHook}
          texts={texts}
          size={size}
          styles={subcomponentStyles?.range}
        />
      )}
      <PaginationNav
        hideFirstPageBtn={hideParts.firstPageBtn}
        hideLastPageBtn={hideParts.lastPageBtn}
        hideNextPageBtn={hideParts.nextPageBtn}
        hidePrevPageBtn={hideParts.prevPageBtn}
        id={id}
        paginationHook={paginationHook}
        size={size}
        styles={subcomponentStyles?.nav}
        texts={texts}
      />
    </PaginationContainer>
  );
};

export const Pagination = InternalPagination as typeof InternalPagination & {
  Container: typeof PaginationContainer;
  Info: typeof Label;
  Nav: typeof PaginationNav;
  Range: typeof PaginationRange;
};

Pagination.Container = PaginationContainer;
Pagination.Info = Label;
Pagination.Nav = PaginationNav;
Pagination.Range = PaginationRange;
