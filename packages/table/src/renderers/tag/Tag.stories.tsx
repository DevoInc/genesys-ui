import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Holo } from '@devoinc/holo';
import { Cell } from '../../core/Cell';
import { ColDef } from '../../declarations';
import { TagRenderer } from './Tag';
import { DEFAULT_VIRTUAL_COLUMN } from '../../constants';

const data = Holo.of()
  .schema({
    booleanValue: 'bool',
    status: () => Holo.chance.pickone(['TODO', 'inProgress', 'test', 'done']),
  })
  .repeat(1)
  .generate();

const columnBoolean: ColDef = {
  id: 'booleanValue',
  headerName: 'booleanValue',
  type: 'tag',
  tagConfig: {
    true: { color: '#1EC990', text: 'Active' },
    false: { color: '#ED5353', text: 'Inactive' },
  },
  CellRenderer: TagRenderer,
};

const columnStatus: ColDef = {
  id: 'status',
  headerName: 'status',
  type: 'tag',
  tagConfig: {
    TODO: { color: '#1EC990', text: 'TODO' },
    inProgress: { color: '#ED5353', text: 'inProgress' },
    test: { color: 'orange', text: 'test' },
    done: { color: 'green', text: 'done' },
  },
  CellRenderer: TagRenderer,
};

const meta: Meta<typeof Cell> = {
  title: 'Components/Table/Cell/renderers/Tag',
  component: Cell,
};

export default meta;
type Story = StoryObj<typeof Cell>;

export const BooleanRenderer: Story = {
  render: () =>
    (() => {
      return (
        <Cell
          columnDef={columnBoolean}
          data={data[0][columnBoolean.id]}
          virtualColumn={DEFAULT_VIRTUAL_COLUMN}
        />
      );
    })(),
};

export const Status: Story = {
  render: () =>
    (() => {
      return (
        <Cell
          columnDef={columnStatus}
          data={data[0][columnStatus.id]}
          virtualColumn={DEFAULT_VIRTUAL_COLUMN}
        />
      );
    })(),
};
