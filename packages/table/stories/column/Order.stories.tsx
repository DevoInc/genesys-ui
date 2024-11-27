import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { BasicTable } from '../../src/recipes/BasicTable';
import { useOrderStruct } from '../../src/hooks';
import { TColDef } from '../../src/declarations';
import {
  updateColDefsWithOrderStruct,
  orderDataByOrderStruct,
} from '../../src/helpers';

const meta: Meta<typeof BasicTable> = {
  title: 'Components/Layout/Table/Column/Order',
  component: BasicTable,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BasicTable>;

const OrderTable = () => {
  const colDefs = [
    {
      id: 'id',
      preset: 'text',
      headerName: 'ID',
      cellStyle: {
        width: 3,
      },
    },
    {
      id: 'name',
      headerName: 'Name',
      preset: 'text',
      editable: true,
      cellStyle: {
        width: 7,
      },
      sortable: false,
    },
    {
      id: 'age',
      headerName: 'Age',
      preset: 'number',
      editable: true,
      cellStyle: {
        width: 5,
      },
    },
  ];

  const data = [
    { id: 6, name: 'Christine Jimenez', age: 60 },
    { id: 1, name: 'Ina Osborne', age: 20 },
    { id: 2, name: 'Jimmy Hogan', age: 20 },
    { id: 3, name: 'Myra Bell', age: 57 },
    { id: 4, name: 'Jane Padilla', age: 46 },
    { id: 5, name: 'Isabelle Gardner', age: 31 },
    { id: 7, name: 'Sean Parsons', age: 31 },
    { id: 8, name: 'Alvin Castro', age: 55 },
    { id: 9, name: 'Lawrence Holland', age: 56 },
    { id: 10, name: 'Brandon Robertson', age: 41 },
  ];

  const { orderStruct, onSort } = useOrderStruct([{ id: 'id', sort: 'desc' }]);
  const dataOrdered = [...data].sort(orderDataByOrderStruct(orderStruct));

  return (
    <BasicTable
      id={'tableOrderStorie'}
      onSort={(colDef: TColDef) => {
        onSort(colDef.id);
      }}
      defaultColDef={{
        editable: false,
        sortable: true,
      }}
      showFilters
      colDefs={updateColDefsWithOrderStruct(colDefs, orderStruct)}
      data={dataOrdered}
    />
  );
};

export const Base: Story = {
  render: () => <OrderTable />,
};
