import { Meta, StoryObj } from '@storybook/react-vite';

import { BasicTable, TColDef, TData } from '../../src';
import { ROW_HEIGHT_MD } from '../../src/constants';

const meta: Meta<typeof BasicTable> = {
  title: 'Components/Layout/Table/Striped',
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

export const Striped: Story = {
  args: {
    maxHeight: '80vh',
    rowHeight: ROW_HEIGHT_MD,
    striped: true,
    rowDefs: [],
    colDefs,
    data,
  },
};

export const NoStriped: Story = {
  args: {
    maxHeight: '80vh',
    rowHeight: ROW_HEIGHT_MD,
    striped: false,
    rowDefs: [],
    colDefs,
    data,
  },
};

export const StripedCustom: Story = {
  args: {
    maxHeight: '80vh',
    rowHeight: ROW_HEIGHT_MD,
    striped: true,
    stripedFn: (index) => (index + 1) % 3 === 0,
    rowDefs: [],
    colDefs,
    data,
  },
};
