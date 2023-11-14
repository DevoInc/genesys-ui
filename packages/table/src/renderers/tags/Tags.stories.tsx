import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Holo } from '@devoinc/holo';
import { Cell } from '../../core/Cell';
import { ColDef } from '../../declarations';
import { TagsRenderer } from './Tags';
import { DEFAULT_VIRTUAL_COLUMN } from '../../constants';

const data = Holo.of()
  .schema({
    tags: () =>
      Holo.chance.pickset(
        [
          { text: 'Coworker', colorScheme: 'success' },
          { text: 'Developer', colorScheme: 'warning' },
          { text: 'Engineer', colorScheme: 'error' },
          { text: 'Components', colorScheme: 'data-blue' },
        ],
        Holo.chance.integer({ min: 1, max: 4 }),
      ),
  })
  .repeat(1)
  .generate();

const column: ColDef = {
  id: 'tags',
  headerName: 'tags',
  type: 'tags',
  CellRenderer: TagsRenderer,
};

const meta: Meta<typeof Cell> = {
  title: 'Components/Table/Cell/renderers/Tags',
  component: Cell,
};

export default meta;
type Story = StoryObj<typeof Cell>;

export const Base: Story = {
  render: () =>
    (() => {
      return (
        <Cell
          columnDef={column}
          data={data[0][column.id]}
          virtualColumn={DEFAULT_VIRTUAL_COLUMN}
        />
      );
    })(),
};
