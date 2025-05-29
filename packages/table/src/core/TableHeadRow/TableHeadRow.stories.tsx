import { Meta, StoryObj } from '@storybook/react-vite';

import { TableHeadRow } from './TableHeadRow';

const meta: Meta<typeof TableHeadRow> = {
  title: 'Components/Layout/Table/Core/TableHeadRow',
  component: TableHeadRow,
};

export default meta;
type Story = StoryObj<typeof TableHeadRow>;

export const Base: Story = {
  args: {
    density: 'default',
    showFilters: true,
    children: 'TableHeadRow',
  },
};
