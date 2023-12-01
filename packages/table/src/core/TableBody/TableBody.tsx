import React from 'react';
import { Row } from '../Row';
import { ColDef } from '../../declarations';
import { StyledTableBody } from './StyledTableBody';
import { VirtualItem, Virtualizer } from '@tanstack/react-virtual';
import { Box, Typography } from '@devoinc/genesys-ui';
import { TableContext } from '../Table/context';

interface TableBodyProps {
  rowVirtualizer: Virtualizer<HTMLDivElement, Element>;
  columnVirtualizer: Virtualizer<HTMLDivElement, Element>;
  data: unknown;
  columnDefs: ColDef[];
}

export const TableBody: React.FC<TableBodyProps> = ({
  columnDefs,
  rowVirtualizer,
  columnVirtualizer,
  data,
}) => {
  const { texts } = React.useContext(TableContext);
  let emptyMessage;
  if (!data) {
    emptyMessage = texts?.general?.noData;
  } else if (!rowVirtualizer.getVirtualItems().length) {
    emptyMessage = texts?.general?.noResults;
  }
  console.info();
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
  return (
    <StyledTableBody
      $height={`${rowVirtualizer.getTotalSize()}px`}
      $width={`${columnVirtualizer.getTotalSize()}px`}
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
