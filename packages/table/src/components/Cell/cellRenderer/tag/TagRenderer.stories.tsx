import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Cell } from '../../Cell';
import { ColDef } from '../../declarations';

const column: ColDef = {
  colId: 'tag',
  field: 'tag',
  headerName: 'tag',
  type: 'tag',
  cellStyle: {
    align: {
      horizontal: 'left',
      vertical: 'center',
    },
    textAlign: 'right',
  },
};

const meta: Meta<typeof Cell> = {
  title: 'Components/Table/Cell/tag renderer',
  component: Cell,
};

export default meta;
type Story = StoryObj<typeof Cell>;

export const Base: Story = {
  render: () =>
    (() => {
      return (
        <Cell
          column={column}
          data={{ text: 'Coworker', colorScheme: 'primary' }}
        />
      );
    })(),
};
