import { Meta, StoryObj } from '@storybook/react';
import { Holo } from '@devoinc/holo';
import { BasicTable, TColDef, TData, TRowDef } from '../../../src';

import { ROW_HEIGHT_MD } from '../../../src/constants';

const meta: Meta<typeof BasicTable> = {
  title: 'Components/Layout/Table/Row/Presets/draggable',
  component: BasicTable,
  parameters: {
    layout: 'fullscreen',
  },
};

const data: TData = Holo.of()
.addType('index', (args = {}) => String(args.index + 1))
.schema({
  id: 'index',
  name: 'name',
})
.repeat(6)
.generate();

const rowDefs: TRowDef[] = [
  {
    id: '1',
    preset: 'draggable',
  },
  {
    id: '4',
    preset: 'draggable',
  },
];

const colDefs: TColDef[] = [
  {
    id: 'id',
    preset: 'text',
    headerName: 'ID',
  },
  {
    id: 'name',
    headerName: 'name',
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
    rowDefs,
    colDefs,
    data,
  },
};

export const NoStriped: Story = {
  args: {
    maxHeight: '80vh',
    rowHeight: ROW_HEIGHT_MD,
    striped: false,
    rowDefs,
    colDefs,
    data,
  },
};
