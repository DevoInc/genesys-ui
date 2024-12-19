import * as React from 'react';

import type { IPaginationCommonInterface } from './declarations';
import type { HFlexProps } from '../HFlex';

import { DEFAULT_PAGE_SIZE, DEFAULT_PAGE_SIZE_OPTIONS } from './constants';

import {
  PaginationNav,
  PaginationRange,
  PaginationLabel,
  PaginationContainer,
} from './components';
import { PaginationContext } from './context';

export interface PaginationProps
  extends IPaginationCommonInterface,
    Omit<HFlexProps, 'onChange'> {}

export const InternalPagination: React.FC<PaginationProps> = ({
  as = 'nav',
  children,
  justifyContent = 'flex-end',
  size = 'md',
  spacing,
  texts,
  totalItems,
  page = 0,
  pageSize = DEFAULT_PAGE_SIZE,
  pageSizeOptions = DEFAULT_PAGE_SIZE_OPTIONS,
  onChange,
  onPageSizeChange,
  goToFirstPage,
  goToLastPage,
  goToNextPage,
  goToPage,
  goToPreviousPage,
  ...restHFlexProps
}) => {
  return children ? (
    <PaginationContext.Provider value={{ size, texts }}>
      {children}
    </PaginationContext.Provider>
  ) : (
    <Pagination._Container
      {...restHFlexProps}
      as={as}
      size={size}
      justifyContent={justifyContent}
      spacing={spacing || `cmp-${size}`}
    >
      <Pagination._Label
        texts={texts}
        size={size}
        totalItems={totalItems}
        pageSize={pageSize}
        page={page}
      />
      <Pagination._Range
        size={size}
        pageSize={pageSize}
        pageSizeOptions={pageSizeOptions}
        texts={texts}
        onPageSizeChange={onPageSizeChange}
      />
      <Pagination._Nav
        size={size}
        texts={texts}
        page={page}
        totalItems={totalItems}
        pageSize={pageSize}
        goToFirstPage={goToFirstPage}
        goToLastPage={goToLastPage}
        goToNextPage={goToNextPage}
        goToPage={goToPage}
        goToPreviousPage={goToPreviousPage}
        onChange={onChange}
      />
    </Pagination._Container>
  );
};

export const Pagination = InternalPagination as typeof InternalPagination & {
  _Container: typeof PaginationContainer;
  _Label: typeof PaginationLabel;
  _Range: typeof PaginationRange;
  _Nav: typeof PaginationNav;
};

Pagination._Container = PaginationContainer;
Pagination._Label = PaginationLabel;
Pagination._Range = PaginationRange;
Pagination._Nav = PaginationNav;

InternalPagination.displayName = 'Pagination';
Pagination._Container.displayName = 'Pagination._Container';
Pagination._Label.displayName = 'Pagination._Label';
Pagination._Range.displayName = 'Pagination._Range';
Pagination._Nav.displayName = 'Pagination._Nav';
