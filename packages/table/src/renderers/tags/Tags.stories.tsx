import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Holo } from '@devoinc/holo';
import { Cell } from '../../core/Cell';
import { ColDef } from '../../declarations';
import { TagsRenderer } from './Tags';

const data = Holo.of()
  .schema({
    tags: () =>
      Holo.chance.pickset(
        [
          { text: 'Coworker', colorScheme: 'success' },
          { text: 'Developer', colorScheme: 'data-magenta' },
          { text: 'Engineer', colorScheme: 'data-purple' },
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
  preset: 'tags',
  cellRenderer: TagsRenderer,
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
      return <Cell columnDef={column} data={data[0][column.id]} />;
    })(),
};
