import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Cell } from '../../Cell';
import { ColDef } from '../../declarations';
import { data } from '../../../../stories/data';

const column: ColDef = {
  colId: 'tags',
  field: 'tags',
  headerName: 'tags',
  type: 'tags',
  cellStyle: {
    align: {
      horizontal: 'left',
      vertical: 'center',
    },
    textAlign: 'right',
  },
};

const meta: Meta<typeof Cell> = {
  title: 'Components/Table/Cell/Base renderers/Tags',
  component: Cell,
};

export default meta;
type Story = StoryObj<typeof Cell>;

export const Base: Story = {
  render: () =>
    (() => {
      return <Cell column={column} data={data[0][column.field]} />;
    })(),
};
