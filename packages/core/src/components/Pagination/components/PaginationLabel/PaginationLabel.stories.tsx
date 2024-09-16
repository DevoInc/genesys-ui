import { Meta, StoryObj } from '@storybook/react';

import { PaginationLabel } from './PaginationLabel';

const meta: Meta<typeof PaginationLabel> = {
  title: 'Components/Navigation/Pagination/Components/Label',
  component: PaginationLabel,
  args: {
    size: 'md',
    content: '1 - 5 of 150 items',
  },
};

export default meta;
type Story = StoryObj<typeof PaginationLabel>;

export const Base: Story = {};
