import { Meta, StoryObj } from '@storybook/react';

import { UploadFiles } from './UploadFiles';

const meta: Meta<typeof UploadFiles> = {
  title: 'Components/Form/UploadFiles',
  component: UploadFiles,
  args: {
    hasWideControl: true,
    label: 'Label for story',
    labelPosition: 'top',
    size: 'md',
    status: 'base',
    allowMultiple: false,
    allowImagePreview: false,
    imagePreviewMaxHeight: 150,
    imagePreviewMinHeight: 44,
    server: 'http://192.168.33.10',
  },
  argTypes: {
    helper: {
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof UploadFiles>;

export const Base: Story = {
  args: {
    allowMultiple: true,
    showLabelIcon: true
  },
};
