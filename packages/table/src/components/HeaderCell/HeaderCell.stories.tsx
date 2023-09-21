import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { HeaderCell } from './HeaderCell';
import { ColDef } from '../Cell/declarations';
import { data } from '../../stories/data';

const column: ColDef = {
  colId: 'name',
  field: 'name',
  headerName: 'Name',
  cellStyle: {
    align: {
      horizontal: 'left',
      vertical: 'center',
    },
    textAlign: 'right',
  },
};

const meta: Meta<typeof HeaderCell> = {
  title: 'Components/Table/Header Cell',
  component: HeaderCell,
};

export default meta;
type Story = StoryObj<typeof HeaderCell>;

export const Base: Story = {
  render: () =>
    (() => {
      return <HeaderCell column={column} data={data[0][column.field]} />;
    })(),
};
