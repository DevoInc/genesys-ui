import * as React from 'react';

import type { IPaginationCommonInterface } from './declarations';
import { DEFAULT_TEXTS } from './constants';
import { PaginationContext } from './context';

import { PaginationNav, PaginationRange, PaginationLabel } from './components';
import { HFlex, type HFlexProps } from '../HFlex';

export interface PaginationProps
  extends IPaginationCommonInterface,
    HFlexProps {}

export const InternalPagination: React.FC<PaginationProps> = ({
  as = 'nav',
  children,
  justifyContent = 'flex-end',
  paginationHook,
  size = 'md',
  spacing,
  texts,
  ...restHFlexProps
}) => {
  const { pageFirstItem, pageLastItem, totalItems, pageSize } = React.useMemo(
    () => paginationHook,
    [paginationHook],
  );

  const { infoTextFn } = React.useMemo(
    () => ({ ...DEFAULT_TEXTS, ...texts }),
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
    <HFlex
      {...restHFlexProps}
      as={as}
      justifyContent={justifyContent}
      spacing={spacing || `cmp-${size}`}
    >
      <PaginationContext.Provider
        value={{ size, texts, paginationHook, paginationInfoText }}
      >
        {children}
      </PaginationContext.Provider>
    </HFlex>
  );
};

export const Pagination = InternalPagination as typeof InternalPagination & {
  Label: typeof PaginationLabel;
  Nav: typeof PaginationNav;
  Range: typeof PaginationRange;
};

Pagination.Label = PaginationLabel;
Pagination.Nav = PaginationNav;
Pagination.Range = PaginationRange;

InternalPagination.displayName = 'Pagination';
Pagination.Label.displayName = 'Pagination.Label';
Pagination.Nav.displayName = 'Pagination.Nav';
Pagination.Range.displayName = 'Pagination.Range';
