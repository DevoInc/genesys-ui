import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import {
  // VFlex,
  Flex,
  Button,
  // Typography,
  ToastContainer,
  toast,
  // ToastProps,
} from '../';
import { lorem } from '../../../stories/utils/fillerTexts';
// import { ToastStatus } from './declarations';

const meta: Meta<typeof toast> = {
  title: 'Components/Core/Feedback/Toast',
  component: Button,
  args: {
    alignItems: 'flex-start',
    childrenFitFullWidth: true,
    childrenFitFullHeight: false,
    inline: false,
    justifyContent: 'flex-start',
    spacing: 'cmp-md',
  },
};

export default meta;
type Story = StoryObj<typeof toast>;

export const Base: Story = {
  args: {
    accent: false,
    collapsable: false,
    id: 'default-toast',
    maxHeight: undefined,
    content: lorem,
    subtitle: 'Toasts notifications are useful',
    title: 'Notification title',
    status: 'info',
  },
  render: (args) =>
    ((args) => (
      <Flex.Item key={'default-toast--info'} id={'default-toast--info'}>
        <Button
          colorScheme={'info'}
          onClick={() => {
            toast({
              status: 'info',
              id: 'default-toast--info',
              accent: false,
              actionApply: {
                label: 'Apply',
                action: () => alert('Action applied'),
              },
              actionReject: {
                label: 'Cancel',
                action: () => alert('Action rejected'),
              },
              collapsable: false,
              maxHeight: undefined,
              content: lorem,
              subtitle: 'Toasts notifications are useful',
              title: 'Notification title',
              ...args,
            });
          }}
        >
          Open notification
        </Button>
        <ToastContainer />
      </Flex.Item>
    ))(args),
};
