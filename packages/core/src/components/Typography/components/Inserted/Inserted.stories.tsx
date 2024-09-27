import { Meta, StoryObj } from '@storybook/react';

import { Inserted } from './Inserted';

const meta: Meta<typeof Inserted> = {
  title: 'Components/Text/Typography/Inline',
  component: Inserted,
};

export default meta;
type Story = StoryObj<typeof Inserted>;

export const BaseInserted: Story = {
  tags: ['isHidden'],
  args: {
    children: 'Inserted text',
  },
};
