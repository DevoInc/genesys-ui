import * as React from 'react';

import { Table } from '../core';

import { TableOptionsProps } from '../declarations';
import {
  typeDate,
  typeString,
  typeLongString,
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
      typeLongString,
      typeNumber,
      typeBoolean,
      typeTag,
      typeTags,
    ],
  };

  return <Table tableOptions={TableOptionsPlus} data={data} />;
};
