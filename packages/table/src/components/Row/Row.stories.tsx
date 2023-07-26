import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Row } from './Row';
import { ColDef } from '../Cell/declarations';
import { data } from '../../stories/data';

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
    colId: 'company',
    field: 'company',
    headerName: 'company',
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
    field: 'age',
    headerName: 'age',
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
