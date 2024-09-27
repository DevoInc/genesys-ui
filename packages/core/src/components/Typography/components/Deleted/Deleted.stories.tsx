import { Meta, StoryObj } from '@storybook/react';

import { Deleted } from './Deleted';

const meta: Meta<typeof Deleted> = {
  title: 'Components/Text/Typography/Inline',
  component: Deleted,
};

export default meta;
type Story = StoryObj<typeof Deleted>;

export const BaseDeleted: Story = {
  tags: ['isHidden'],
  args: {
    children: 'Crossed-out text',
  },
};
