import React from 'react';
import { Row } from '../Row';
import { ColDef, TextsType } from '../../declarations';
import { StyledTableBody } from './StyledTableBody';
import { VirtualItem, Virtualizer } from '@tanstack/react-virtual';
import { Box, Typography } from '@devoinc/genesys-ui';
import { TableContext } from '../Table/context';

export interface TableBodyProps {
  colDefs: ColDef[];
  columnVirtualizer: Virtualizer<HTMLDivElement, Element>;
  data: unknown;
  rowVirtualizer: Virtualizer<HTMLDivElement, Element>;
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
  colDefs,
  columnVirtualizer,
  data,
  rowVirtualizer,
}) => {
  const { visualOptions, texts, measures } = React.useContext(TableContext);
  const emptyMessage = getEmptyMessage(data, texts, rowVirtualizer);

  return (
    <StyledTableBody
      $height={measures?.body?.total?.height}
      $width={measures?.body?.total?.width}
      highlightColumnsOnHover={visualOptions?.highlightColumnsOnHover}
    >
      {emptyMessage ? (
        <tr>
          <td colSpan={colDefs?.length}>{renderMessage(emptyMessage)}</td>
        </tr>
      ) : (
        rowVirtualizer.getVirtualItems().map((virtualRow: VirtualItem) => {
          return (
            <Row
              key={'tb_' + virtualRow.key}
              colDefs={colDefs}
              columnVirtualizer={columnVirtualizer}
              data={data[virtualRow.index]}
              virtualRow={virtualRow}
            />
          );
        })
      )}
    </StyledTableBody>
  );
};
