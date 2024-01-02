import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { BasicTable } from './BasicTable';
import { useOrderStruct } from '../hooks/useOrderStruct';
import { ColDef } from '../declarations';
import { orderDataByOrderStruct } from '../helpers/orderDataByOrderStruct';

const meta: Meta<typeof BasicTable> = {
  title: 'Components/Table/Recipes/tableOrder',
  component: BasicTable,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BasicTable>;

const OrderTable = () => {
  const columnDefs = [
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
  const dataOrder = orderDataByOrderStruct(data, orderStruct);

  return (
    <BasicTable
      onSort={(colDef: ColDef) => {
        onSort(colDef.id);
      }}
      defaultColDef={{
        editable: false,
        sortable: true,
      }}
      minWidth={2800}
      colDefs={columnDefs.map((col) => {
        const orderCol = orderStruct.find((colorder) => colorder.id === col.id);
        const orderColIndex = orderStruct.findIndex(
          (colorder) => colorder.id === col.id,
        );

        if (orderCol) {
          return { ...col, sort: orderCol.sort, sortIndex: orderColIndex };
        }
        return col;
      })}
      data={dataOrder}
    />
  );
};

export const Order: Story = {
  render: () => <OrderTable />,
};
