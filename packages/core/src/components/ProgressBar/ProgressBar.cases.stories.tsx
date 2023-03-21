import { Meta, StoryObj } from '@storybook/react';

import { ProgressBar } from '..';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/Core/Feedback/ProgressBar/Cases',
  component: ProgressBar,
  args: {
    colorScheme: 'dark',
    iconComplete: 'check_thick',
    iconError: 'error_warning_danger_stop',
    iconWarning: 'error_warning_alert_attention',
    progress: 'progressing',
    size: 'md',
    type: 'standard',
    wide: true,
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Circular: Story = {
  args: {
    percent: 75,
    type: 'circular',
    showInfo: true,
    progress: 'warning',
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
