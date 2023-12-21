import React from 'react';
import { VirtualItem, Virtualizer } from '@tanstack/react-virtual';

import { Typography } from '@devoinc/genesys-ui';

import { StyledTableHead } from './StyledTableHead';
import { StyledTableHeadRow } from './StyledTableHeadRow';
import { HeaderCell } from '../HeaderCell';
import { ColDef, Data } from '../../declarations';
import { getColDefByID } from '../utils';
import { TableContext } from '../Table/context';

interface TableHeadProps {
  scrolled?: boolean;
  columnVirtualizer: Virtualizer<HTMLDivElement, Element>;
  colDefs: ColDef[];
  data: Data;
}

export const TableHead: React.FC<TableHeadProps> = ({
  columnVirtualizer,
  colDefs,
  scrolled,
  data,
}) => {
  const { measures, sizes, showFilters, visualOptions } =
    React.useContext(TableContext);
  return (
    <StyledTableHead scrolled={scrolled} $width={measures?.body?.total?.width}>
      <StyledTableHeadRow $height={`${sizes.head.height}px`}>
        {columnVirtualizer
          .getVirtualItems()
          .map((virtualColumn: VirtualItem) => {
            const colDef = getColDefByID(colDefs, virtualColumn);
            return (
              <HeaderCell
                key={`header-cell-${virtualColumn.key}`}
                colDef={colDef}
                width={`${virtualColumn.size}px`}
                offsetX={virtualColumn.start}
                resizable={
                  colDef?.resizable ?? visualOptions?.resizableColumns ?? false
                }
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
              const colDef = getColDefByID(colDefs, virtualColumn);
              return (
                <HeaderCell
                  key={`header-filter-cell-${virtualColumn.key}`}
                  colDef={colDef}
                  resizable={false}
                  width={`${virtualColumn.size}px`}
                  offsetX={virtualColumn.start}
                >
                  {colDef.cellFilter
                    ? colDef.cellFilter({ colDef, data })
                    : null}
                </HeaderCell>
              );
            })}
        </StyledTableHeadRow>
      ) : null}
    </StyledTableHead>
  );
};
