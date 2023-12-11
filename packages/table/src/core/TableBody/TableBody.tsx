import React from 'react';
import { Row } from '../Row';
import { ColDef } from '../../declarations';
import { StyledTableBody } from './StyledTableBody';
import { VirtualItem, Virtualizer } from '@tanstack/react-virtual';
import { Box, Typography } from '@devoinc/genesys-ui';
import { TableContext } from '../Table/context';

export interface TableBodyProps {
  columnDefs: ColDef[];
  columnVirtualizer: Virtualizer<HTMLDivElement, Element>;
  data: unknown;
  rowVirtualizer: Virtualizer<HTMLDivElement, Element>;
  visibleHeight: number;
  height?: React.CSSProperties['height'];
  width?: React.CSSProperties['width'];
}

export const TableBody: React.FC<TableBodyProps> = ({
  columnDefs,
  columnVirtualizer,
  data,
  rowVirtualizer,
  height,
  width,
}) => {
  const { texts } = React.useContext(TableContext);
  let emptyMessage;
  if (!data) {
    emptyMessage = texts?.general?.noData;
  } else if (!rowVirtualizer.getVirtualItems().length) {
    emptyMessage = texts?.general?.noResults;
  }
  const renderMessage = (message: React.ReactNode) => {
    return typeof message === 'string' ? (
      <Box padding="cmp-sm">
        <Typography.Paragraph colorScheme="weak" gutterBottom="0">
          {message}
        </Typography.Paragraph>
      </Box>
    ) : (
      <Box padding="cmp-md">{message}</Box>
    );
  };
  const { visualOptions } = React.useContext(TableContext);

  return (
    <StyledTableBody
      $height={height}
      $width={width}
      highlightColumnsOnHover={visualOptions?.highlightColumnsOnHover}
    >
      {emptyMessage ? (
        <tr>
          <td colSpan={columnDefs?.length}>{renderMessage(emptyMessage)}</td>
        </tr>
      ) : (
        rowVirtualizer.getVirtualItems().map((virtualRow: VirtualItem) => {
          return (
            <Row
              key={'tb_' + virtualRow.key}
              columnDefs={columnDefs}
              columnVirtualizer={columnVirtualizer}
              data={data[virtualRow.index]}
              even={(virtualRow.index + 1) % 2 === 0}
              styles={{
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
                width: `${columnVirtualizer.getTotalSize()}px`,
                position: 'absolute',
              }}
            />
          );
        })
      )}
    </StyledTableBody>
  );
};
