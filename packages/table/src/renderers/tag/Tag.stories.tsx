import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Holo } from '@devoinc/holo';
import { Cell } from '../../core/Cell';
import { ColDef } from '../../declarations';
import { TagRenderer } from './Tag';

const data = Holo.of()
  .schema({
    booleanValue: 'bool',
    status: () => Holo.chance.pickone(['TODO', 'In progress', 'Test', 'Done']),
  })
  .repeat(1)
  .generate();

const columnBoolean: ColDef = {
  id: 'booleanValue',
  headerName: 'booleanValue',
  type: 'tag',
  cellRendererConfig: {
    true: { color: 'success', text: 'Active' },
    false: { color: 'neutral', text: 'Inactive' },
  },
  CellRenderer: TagRenderer,
};

const columnStatus: ColDef = {
  id: 'status',
  headerName: 'status',
  type: 'tag',
  cellRendererConfig: {
    TODO: { color: 'neutral', text: 'TODO' },
    inProgress: { color: 'warning', text: 'In progress' },
    test: { color: 'info', text: 'Test' },
    done: { color: 'green', text: 'Done' },
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
        <Cell columnDef={columnBoolean} data={data[0][columnBoolean.id]} />
      );
    })(),
};

export const Status: Story = {
  render: () =>
    (() => {
      return <Cell columnDef={columnStatus} data={data[0][columnStatus.id]} />;
    })(),
};
