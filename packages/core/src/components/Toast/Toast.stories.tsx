import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button, ToastContainer, toast, ToastProps, Typography } from '../';
import { lorem, lorem2, lorem3 } from '../../../stories/utils/fillerTexts';
import { ToastPanel } from './components';

const BaseToast = ({ id, ...rest }: ToastProps) => (
  <>
    <Button
      colorScheme={'info'}
      onClick={() => {
        toast({
          id: id,
          ...rest,
        });
      }}
    >
      Open notification
    </Button>
    <ToastContainer />
  </>
);

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

export const WithScroll: Story = {
  name: 'Scrolled content',
  args: {
    content: (
      <>
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem}
        </Typography.Paragraph>
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem2}
        </Typography.Paragraph>
        <Typography.Paragraph>{lorem3}</Typography.Paragraph>
      </>
    ),
  },
  render: (args) => <BaseToast id="toast-scrolled-content" {...args} />,
};

export const WithActions: Story = {
  name: 'With actions',
  args: {
    actionApply: {
      label: 'Apply',
      action: () => {
        // eslint-disable-next-line no-alert
        alert('Action applied');
      },
    },
    actionReject: {
      label: 'Cancel',
      action: () => {
        // eslint-disable-next-line no-alert
        alert('Action rejected');
      },
    },
  },
  render: (args) => <BaseToast id="toast-width-actions" {...args} />,
};

export const CollapsableContent: Story = {
  name: 'Collapsable content',
  args: {
    collapsable: true,
    content: (
      <>
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem}
        </Typography.Paragraph>
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem2}
        </Typography.Paragraph>
        <Typography.Paragraph>{lorem3}</Typography.Paragraph>
      </>
    ),
  },
  render: (args) => <BaseToast id="toast-collapsable-content" {...args} />,
};
