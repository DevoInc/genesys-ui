import { Meta, StoryObj } from '@storybook/react';

import { Strong } from './Strong';

const meta: Meta<typeof Strong> = {
  title: 'Components/Text/Typography/Inline',
  component: Strong,
};

export default meta;
type Story = StoryObj<typeof Strong>;

export const BaseStrong: Story = {
  tags: ['isHidden'],
  args: {
    children: 'Stronger than iron',
  },
};
