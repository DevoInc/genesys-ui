import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { UploadFiles } from './UploadFiles';
import { Form } from '@devoinc/genesys-ui';

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

export const Playground: Story = {
  args: {
    allowMultiple: true,
    showLabelIcon: true,
  },
};

export const Disabled: Story = {
  tags: ['isHidden'],
  args: {
    allowMultiple: true,
    disabled: true,
    showLabelIcon: true,
  },
};

export const Status: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <Form.Group>
        <UploadFiles
          {...props}
          label="Base"
          helper="This is the helper for the UploadFiles"
        />
        <UploadFiles
          {...props}
          label="Error"
          status="error"
          helper="This is the error message for the UploadFiles"
        />
        <UploadFiles
          {...props}
          label="Success"
          status="success"
          helper="This is the success message for the UploadFiles"
        />
        <UploadFiles
          {...props}
          label="Warning"
          status="warning"
          helper="This is the warning message for the UploadFiles"
        />
      </Form.Group>
    ))(args),
};
