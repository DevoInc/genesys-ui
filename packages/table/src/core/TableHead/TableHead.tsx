import React from 'react';
import { VirtualItem, Virtualizer } from '@tanstack/react-virtual';

import { Typography } from '@devoinc/genesys-ui';

import { StyledTableHead } from './StyledTableHead';
import { StyledTableHeadRow } from './StyledTableHeadRow';
import { HeaderCell } from '../HeaderCell';
import { ColDef } from '../../declarations';
import { getColDefByID } from '../utils';
import { TableContext } from '../Table/context';

interface TableHeadProps {
  scrolled?: boolean;
  columnVirtualizer: Virtualizer<HTMLDivElement, Element>;
  columnDefs: ColDef[];
}

export const TableHead: React.FC<TableHeadProps> = ({
  columnVirtualizer,
  columnDefs,
  scrolled,
}) => {
  const { measures, sizes, showFilters } = React.useContext(TableContext);
  return (
    <StyledTableHead scrolled={scrolled} $width={measures?.body?.total?.width}>
      <StyledTableHeadRow $height={`${sizes.head.height}px`}>
        {columnVirtualizer
          .getVirtualItems()
          .map((virtualColumn: VirtualItem) => {
            const colDef = getColDefByID(columnDefs, virtualColumn);
            return (
              <HeaderCell
                key={`header-cell-${virtualColumn.key}`}
                colDef={getColDefByID(columnDefs, virtualColumn)}
                width={`${virtualColumn.size}px`}
                offsetX={virtualColumn.start}
              >
                <Typography.Heading size="h6" truncateLine={1}>
                  {colDef.headerName}
                </Typography.Heading>
              </HeaderCell>
            );
          })}
      </StyledTableHeadRow>
      {showFilters ? (
        <StyledTableHeadRow $height={`${sizes.head.height}px`}>
          {columnVirtualizer
            .getVirtualItems()
            .map((virtualColumn: VirtualItem) => {
              const colDef = getColDefByID(columnDefs, virtualColumn);
              return (
                <HeaderCell
                  isFilterCell
                  key={`header-filter-cell-${virtualColumn.key}`}
                  colDef={getColDefByID(columnDefs, virtualColumn)}
                  resizable={false}
                  width={`${virtualColumn.size}px`}
                  offsetX={virtualColumn.start}
                >
                  {colDef.cellFilter ? colDef.cellFilter({ colDef }) : null}
                </HeaderCell>
              );
            })}
        </StyledTableHeadRow>
      ) : null}
    </StyledTableHead>
  );
};
