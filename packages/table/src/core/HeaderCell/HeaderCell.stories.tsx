import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { HeaderCell } from './HeaderCell';
import { ColDef } from '../../declarations';
import { TextRenderer } from '../../renderers';

const column: ColDef = {
  colId: 'name',
  field: 'name',
  headerName: 'Name',
  CellRenderer: TextRenderer,
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
      return <HeaderCell columnDef={column} />;
    })(),
};
