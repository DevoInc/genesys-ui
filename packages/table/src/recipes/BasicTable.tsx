import * as React from 'react';

import { Table } from '../core';
import { TableOptionsProps } from '../declarations';
import * as presets from '../columnPresets';

interface TableProps {
  data: { [key: string]: unknown }[];
  options: TableOptionsProps;
}

export const BasicTable: React.FC<TableProps> = ({ options, data }) => (
  <Table
    options={{
      ...options,
      columnPresets: [
        ...(options?.columnPresets ?? []),
        ...Object.values(presets),
      ],
    }}
    data={data}
  />
);
