import { Meta, StoryObj } from '@storybook/react';

import { BasicTable, TColDef, TData, TRowDef } from '../../src';
import { ROW_HEIGHT_MD } from '../../src/constants';

const meta: Meta<typeof BasicTable> = {
  title: 'Components/Layout/Table/Row/Presets',
  component: BasicTable,
  parameters: {
    layout: 'fullscreen',
  },
};

const data: TData = [
  {
    id: '1',
    state: 'created',
  },
  {
    id: '2',
    state: 'deleted',
  },
  {
    id: '3',
    state: 'selected odd',
  },
  {
    id: '4',
    state: 'selected even',
  },
  {
    id: '5',
    state: 'expanded',
  },
  {
    id: '6',
    state: 'isDragging',
  },
  {
    id: '7',
    state: 'highlighted',
  },
  {
    id: '8',
    state: 'modified',
  },
  {
    id: '9',
    state: 'isAfterRow',
  },
  {
    id: '10',
    state: 'disabled',
  },
  {
    id: '11',
    state: 'draggable',
  },
  {
    id: '12',
    state: 'custom',
  },
];

const rowDefs: TRowDef[] = [
  {
    id: '1',
    preset: 'created',
  },
  {
    id: '2',
    preset: 'deleted',
  },
  {
    id: '3',
    preset: 'selected',
  },
  {
    id: '4',
    preset: 'selected',
  },
  {
    id: '5',
    preset: 'expanded',
  },
  {
    id: '6',
    preset: 'isDragging',
  },
  {
    id: '7',
    preset: 'highlighted',
  },
  {
    id: '8',
    preset: 'modified',
  },
  {
    id: '9',
    preset: 'isAfterRow',
  },
  {
    id: '10',
    preset: 'disabled',
  },
  {
    id: '11',
    preset: 'draggable',
  },
  {
    id: '12',
    style: () => 'background-color: violet'
  },
];

const colDefs: TColDef[] = [
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

export const StateStriped: Story = {
  args: {
    maxHeight: '80vh',
    rowHeight: ROW_HEIGHT_MD,
    striped: true,
    rowDefs,
    colDefs,
    data,
  },
};

export const StateNoStriped: Story = {
  args: {
    maxHeight: '80vh',
    rowHeight: ROW_HEIGHT_MD,
    striped: false,
    rowDefs,
    colDefs,
    data,
  },
};
