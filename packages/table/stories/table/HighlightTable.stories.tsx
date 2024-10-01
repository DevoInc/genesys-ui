import { Meta, StoryObj } from '@storybook/react';

import { BasicTable } from '../../src';
import { ROW_HEIGHT_MD } from '../../src/constants';

const meta: Meta<typeof BasicTable> = {
  title: 'Components/Layout/Table/Highlight',
  component: BasicTable,
  parameters: {
    layout: 'fullscreen',
  },
};

const data = [
  {
    id: '1',
    state: 'created',
  },
  {
    id: '2',
    state: 'deleted',
  },
];

const colDefs = [
  {
    id: 'id',
    preset: 'text',
    headerName: 'ID',
  },
  {
    id: 'state',
    headerName: 'state',
    preset: 'text',
  },
];

export default meta;
type Story = StoryObj<typeof BasicTable>;

export const Columns: Story = {
  args: {
    maxHeight: '80vh',
    rowHeight: ROW_HEIGHT_MD,
    highlightColumnsOnHover: true,
    colDefs,
    data,
  },
};

export const Row: Story = {
  args: {
    maxHeight: '80vh',
    rowHeight: ROW_HEIGHT_MD,
    highlightRowOnHover: true,
    colDefs,
    data,
  },
};

export const RowColumn: Story = {
  args: {
    maxHeight: '80vh',
    rowHeight: ROW_HEIGHT_MD,
    highlightRowOnHover: true,
    highlightColumnsOnHover: true,
    colDefs,
    data,
  },
};
