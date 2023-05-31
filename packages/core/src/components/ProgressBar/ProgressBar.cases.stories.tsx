import { Meta, StoryObj } from '@storybook/react';

import { ProgressBar } from '..';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/Core/Feedback/ProgressBar/Cases',
  component: ProgressBar,
  args: {
    colorScheme: 'dark',
    status: 'progressing',
    size: 'md',
    type: 'standard',
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Circular: Story = {
  args: {
    percent: 75,
    type: 'circular',
    showInfo: true,
    status: 'warning',
  },
};

export const WithInfo: Story = {
  args: {
    percent: 75,
    customInfo: {
      startInfo: 'This is the start info',
      endInfo: 'This is the end info',
    },
    showInfo: true,
  },
};
