import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Row } from './Row';
import { ColDef } from '../cell/declarations';

const data = {
  name: new String('Carlos'),
  city: new String('Madrid'),
  age: new Number(28),
};

const colDefs: ColDef[] = [
  {
    colId: 'name',
    field: 'name',
    headerName: 'Name',
    type: 'default',
    cellStyle: {
      align: {
        horizontal: 'left',
        vertical: 'center',
      },
      textAlign: 'right',
    },
  },
  {
    colId: 'city',
    field: 'city',
    headerName: 'City',
    type: 'default',
    cellStyle: {
      align: {
        horizontal: 'left',
        vertical: 'center',
      },
      textAlign: 'right',
    },
  },
  {
    colId: 'age',
    field: 'Age',
    headerName: 'Name',
    type: 'default',
    cellStyle: {
      align: {
        horizontal: 'left',
        vertical: 'center',
      },
      textAlign: 'right',
    },
  },
];

const meta: Meta<typeof Row> = {
  title: 'Table/Components/Row',
  component: Row,
};

export default meta;
type Story = StoryObj<typeof Row>;

export const Base: Story = {
  render: () =>
    (() => {
      return <Row columnDefs={colDefs} data={data} />;
    })(),
};
