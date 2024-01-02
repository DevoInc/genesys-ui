import { Meta, StoryObj } from '@storybook/react';

import { TableHead } from './TableHead';

const meta: Meta<typeof TableHead> = {
  title: 'Components/Table/TableHead',
  component: TableHead,
};

export default meta;
type Story = StoryObj<typeof TableHead>;

export const Base: Story = {
  args: {
    colDefs: [
      {
        id: 'col1',
        cellRenderer: ({ value }) => value,
      },
    ],
  },
};
