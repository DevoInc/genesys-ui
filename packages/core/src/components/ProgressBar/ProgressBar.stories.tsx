import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ProgressBar } from './ProgressBar';
import { VFlex } from '../VFlex';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/Feedback/ProgressBar',
  component: ProgressBar,
  args: {
    colorScheme: 'dark',
    status: 'progressing',
    size: 'md',
    type: 'standard',
    percent: 48,
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Playground: Story = {};

export const Circular: Story = {
  tags: ['isHidden'],
  args: {
    percent: 75,
    type: 'circular',
    showStatus: true,
    customInfo: { startInfo: 'pepe', endInfo: 'manolo' },
  },
};

export const WithCustomInfo: Story = {
  tags: ['isHidden'],
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
  tags: ['isHidden'],
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
  tags: ['isHidden'],
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

export const Custom: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      return (
        <ProgressBar._Container percent={30} status="error" type="standard">
          <ProgressBar._InnerContainer>
            <ProgressBar._StandardBar />
            <ProgressBar._Info
              hasFloatingStatusHelper
              statusHelper={'Status helper content'}
            />
          </ProgressBar._InnerContainer>
          <ProgressBar._CustomInfo startInfo="This is the start custom info" />
        </ProgressBar._Container>
      );
    })(),
};

export const Sizes: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      return (
        <VFlex>
          <ProgressBar {...props} size="sm" />
          <ProgressBar {...props} size="md" />
        </VFlex>
      );
    })(args),
};

export const Status: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      return (
        <VFlex>
          <ProgressBar
            {...props}
            showStatus
            customInfo={{ startInfo: 'Progressing status' }}
          />
          <ProgressBar
            {...props}
            status="error"
            showStatus
            customInfo={{ startInfo: 'Error status' }}
          />
          <ProgressBar
            {...props}
            status="complete"
            showStatus
            customInfo={{ startInfo: 'Complete status' }}
          />
          <ProgressBar
            {...props}
            status="warning"
            showStatus
            customInfo={{ startInfo: 'Warning status' }}
          />
        </VFlex>
      );
    })(args),
};

export const Indeterminate: Story = {
  tags: ['isHidden'],
  args: {
    indeterminate: true,
  },
};

export const Animated: Story = {
  tags: ['isHidden'],
  args: {
    animated: true,
  },
};
