import * as React from 'react';

import { Table, type TableProps } from '../core';
import { listColumnPresets, listRowPresets } from '../presets';

export const BasicTable: React.FC<TableProps> = ({
  columnPresets,
  rowPresets,
  highlightRowOnHoverFn,
  onCellDataChange,
  ...props
}) => (
  <Table
    {...props}
    columnPresets={[
      ...(columnPresets ?? []),
      ...Object.values(listColumnPresets),
    ]}
    onCellDataChange={onCellDataChange}
    rowPresets={[...(rowPresets ?? []), ...Object.values(listRowPresets)]}
    highlightRowOnHoverFn={highlightRowOnHoverFn || ((rowDef) => rowDef.preset !== 'isAfterRow')}
  />
);
