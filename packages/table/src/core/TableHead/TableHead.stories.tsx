import { Meta, StoryObj } from '@storybook/react-vite';

import { TableHead } from './TableHead';

const meta: Meta<typeof TableHead> = {
  title: 'Components/Layout/Table/Core/TableHead',
  component: TableHead,
};

export default meta;
type Story = StoryObj<typeof TableHead>;

export const Base: Story = {
  args: {
    scrolled: false,
    width: 200,
    children: 'TableHead',
    tableId: 'table-id',
  },
};
