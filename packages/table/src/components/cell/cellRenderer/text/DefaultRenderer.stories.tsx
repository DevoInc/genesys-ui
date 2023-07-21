import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Cell } from '../../Cell';
import { StylesCellProps } from '../../declarationsfake';
import { ColDef } from '../../declarations';

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

const meta: Meta<typeof Cell> = {
  title: 'Table/Components/Cell/default renderer',
  component: Cell,
};

export default meta;
type Story = StoryObj<typeof Cell>;

export const Base: Story = {
  render: () =>
    (() => {
      return (
        <Cell column={column} renderer={'default'}>
          <p>Hola</p>
        </Cell>
      );
    })(),
};
