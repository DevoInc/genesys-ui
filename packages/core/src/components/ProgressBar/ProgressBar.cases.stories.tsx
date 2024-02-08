import { Meta, StoryObj } from '@storybook/react';

import { ProgressBar } from '..';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/Feedback/ProgressBar/Cases',
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
    showStatus: true,
    status: 'warning',
  },
};

export const WithCustomInfo: Story = {
  name: 'With custom info',
  args: {
    percent: 75,
    customInfo: {
      startInfo: 'This is the start info',
      endInfo: 'This is the end info',
    },
    showStatus: true,
  },
};

export const AccessibleValidation: Story = {
  name: 'Accessible and with validation',
  args: {
    status: 'error',
    id: 'story-validation-demo',
    statusHelper: 'There has been a problem with the network',
    size: 'md',
    showStatus: true,
    type: 'standard',
    percent: 48,
  },
};

export const AccessibleFloatingValidation: Story = {
  name: 'Accessible and with floating validation',
  args: {
    status: 'error',
    hasFloatingStatusHelper: true,
    id: 'story-validation-demo',
    statusHelper: 'There has been a problem with the network',
    size: 'md',
    showStatus: true,
    type: 'standard',
    percent: 48,
  },
};
