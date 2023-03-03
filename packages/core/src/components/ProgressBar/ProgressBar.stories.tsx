import { Meta, StoryObj } from '@storybook/react';

import { ProgressBar } from '..';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/Core/Feedback/ProgressBar',
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

export const Base: Story = {};
