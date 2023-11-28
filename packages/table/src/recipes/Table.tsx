import * as React from 'react';

import { Table } from '../core';

import { TableOptionsProps } from '../declarations';
import {
  typeDate,
  typeString,
  typeLink,
  typeNumber,
  typeBoolean,
  typeTag,
  typeTags,
} from '../types';

interface TableProps {
  data: { [key: string]: unknown }[];
  tableOptions: TableOptionsProps;
}

export const BasicTable: React.FC<TableProps> = ({ tableOptions, data }) => {
  const TableOptionsPlus: TableOptionsProps = {
    defaultColumnDef: tableOptions.defaultColumnDef,
    columnDefs: tableOptions.columnDefs,
    visualOptions: tableOptions.visualOptions,
    types: [
      typeDate,
      typeString,
      typeLink,
      typeNumber,
      typeBoolean,
      typeTag,
      typeTags,
    ],
  };

  return <Table tableOptions={TableOptionsPlus} data={data} />;
};
