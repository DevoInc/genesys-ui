import * as React from 'react';
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
    customInfo: { startInfo: 'pepe', endInfo: 'manolo' },
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

export const Custom: Story = {
  name: 'Custom based in internal components',
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
