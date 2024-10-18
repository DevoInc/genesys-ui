import * as React from 'react';

import type { IPaginationCommonInterface } from './declarations';

import { PaginationNav, PaginationRange, PaginationLabel, PaginationContainer } from './components';
import {type HFlexProps } from '../HFlex';

export interface PaginationProps
  extends IPaginationCommonInterface,
    HFlexProps {}

export const InternalPagination: React.FC<PaginationProps> = ({
  as = 'nav',
  justifyContent = 'flex-end',
  size = 'md',
  spacing,
  texts,

  totalItems,
  page = 0,
  pageSize = 10,
  pageSizeOptions = [5, 10, 15, 20],
  onChange,
  onPageSizeChange,

  goToFirstPage,
  goToLastPage,
  goToNextPage,
  goToPage,
  goToPreviousPage,
  ...restHFlexProps
}) => {
  return (
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
