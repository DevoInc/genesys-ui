import React from 'react';
import { Row } from '../Row';
import { ColDef, TextsType } from '../../declarations';
import { StyledTableBody } from './StyledTableBody';
import { VirtualItem, Virtualizer } from '@tanstack/react-virtual';
import { Box, Typography } from '@devoinc/genesys-ui';
import { TableContext } from '../Table/context';

export interface TableBodyProps {
  columnDefs: ColDef[];
  columnVirtualizer: Virtualizer<HTMLDivElement, Element>;
  data: unknown;
  rowVirtualizer: Virtualizer<HTMLDivElement, Element>;
  height?: React.CSSProperties['height'];
  width?: React.CSSProperties['width'];
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

const getEmptyMessage = (
  data: unknown,
  texts: TextsType,
  rowVirtualizer: Virtualizer<HTMLDivElement, Element>,
) => {
  if (!data) {
    return texts?.general?.noData;
  } else if (!rowVirtualizer.getVirtualItems().length) {
    return texts?.general?.noResults;
  }
  return null;
};

export const TableBody: React.FC<TableBodyProps> = ({
  columnDefs,
  columnVirtualizer,
  data,
  rowVirtualizer,
  height,
  width,
}) => {
  const { texts } = React.useContext(TableContext);
  const emptyMessage = getEmptyMessage(data, texts, rowVirtualizer);
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
