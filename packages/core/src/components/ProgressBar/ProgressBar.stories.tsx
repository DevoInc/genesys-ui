import { Meta, StoryObj } from '@storybook/react';

import { ProgressBar } from '..';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/Feedback/ProgressBar',
  component: ProgressBar,
  args: {
    colorScheme: 'dark',
    status: 'progressing',
    size: 'lg',
    type: 'standard',
    percent: 48,
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Base: Story = {};
