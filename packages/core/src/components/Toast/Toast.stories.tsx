import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button, ToastContainer, toast } from '../';
import { lorem } from '../../../stories/utils/fillerTexts';
import { ToastPanel } from './components';

const meta: Meta<typeof toast> = {
  title: 'Components/Feedback/Toast',
  component: ToastPanel,
  args: {
    id: 'default-toast',
    content: lorem,
    subtitle: 'Toasts notifications are useful',
    title: 'Notification title',
    status: 'info',
  },
  parameters: {
    storyWrapper: {
      height: '100vh',
    },
  },
};

export default meta;
type Story = StoryObj<typeof toast>;

export const Base: Story = {
  render: (args) =>
    ((props) => (
      <>
        <Button
          aria-controls="base-toast"
          colorScheme={'info'}
          onClick={() => {
            toast({
              id: 'base-toast',
              ...props,
            });
          }}
        >
          Open notification
        </Button>
        <ToastContainer />
      </>
    ))(args),
};
