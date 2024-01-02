import * as React from 'react';

import { Table, type TableProps } from '../core';
import * as presets from '../columnPresets';

export const BasicTable: React.FC<TableProps> = ({
  columnPresets,
  ...props
}) => (
  <Table
    {...props}
    columnPresets={[...(columnPresets ?? []), ...Object.values(presets)]}
  />
);
