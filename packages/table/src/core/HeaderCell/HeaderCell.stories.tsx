import { Meta, StoryObj } from '@storybook/react-vite';
import { HeaderCell } from './HeaderCell';

const meta: Meta<typeof HeaderCell> = {
  title: 'Components/Layout/Table/Core/HeaderCell',
  component: HeaderCell,
};

export default meta;
type Story = StoryObj<typeof HeaderCell>;

export const Base: Story = {
  args: {
    colDef: {
      id: 'col',
      headerName: 'Column',
    },
    offsetX: 30,
    width: 300,
    children: 'This is a header',
    resizable: true,
  },
};
