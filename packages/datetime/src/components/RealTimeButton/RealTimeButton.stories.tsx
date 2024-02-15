import { Meta, StoryObj } from '@storybook/react';

import { RealTimeButton } from './RealTimeButton';

const meta: Meta<typeof RealTimeButton> = {
  title: 'Components/Datetime/RealTimeButton',
  component: RealTimeButton,
  args: {
    size: 'md',
    state: 'inactive',
  },
};

export default meta;
type Story = StoryObj<typeof RealTimeButton>;

export const Base: Story = {};
