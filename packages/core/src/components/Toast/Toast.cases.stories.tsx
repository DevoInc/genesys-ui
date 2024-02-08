import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button, ToastContainer, toast, Typography } from '../';
import { lorem, lorem2, lorem3 } from '../../../stories/utils/fillerTexts';
import { ToastPanel } from './components';

const meta: Meta<typeof toast> = {
  title: 'Components/Feedback/Toast/Cases',
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

const baseToast = (args, id) => (
  <>
    <Button
      colorScheme={'info'}
      onClick={() => {
        toast({
          id: id,
          ...args,
        });
      }}
    >
      Open notification
    </Button>
    <ToastContainer />
  </>
);

export default meta;
type Story = StoryObj<typeof toast>;

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
  render: (args) => baseToast(args, 'toast-scrolled-content'),
};

export const WithActions: Story = {
  name: 'With actions',
  args: {
    actionApply: {
      label: 'Apply',
      action: () => alert('Action applied'),
    },
    actionReject: {
      label: 'Cancel',
      action: () => alert('Action rejected'),
    },
  },
  render: (args) => baseToast(args, 'toast-width-actions'),
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
  render: (args) => baseToast(args, 'toast-collapsable-content'),
};
