import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Select } from './Select';
import { Form } from '../Form';

const meta: Meta<typeof Select> = {
  title: 'Components/Form/Select',
  component: Select,
  args: {
    hasWideControl: true,
    id: 'select-id',
    label: 'Label for story',
    labelPosition: 'top',
    size: 'md',
    status: 'base',
    menuLevel: 3,
    menuPlacement: 'auto',
    options: [
      { value: 1, label: 'Option one' },
      { value: 2, label: 'Option two' },
      { value: 3, label: 'Option three', isDisabled: true },
    ],
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
type Story = StoryObj<typeof Select>;

export const Playground: Story = {};

export const DisabledAndReadonly: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <Form.Group>
        <Select {...props} disabled label="Disabled" value={1} />
        <Select {...props} readOnly label="Readonly" value={1} />
      </Form.Group>
    ))(args),
};

export const LabelPosition: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <Form.Group>
        <Select {...props} label="Label on top" />
        <Select {...props} label="Label to the left" labelPosition="left" />
        <Select
          {...props}
          label="Label space between"
          labelPosition="between"
        />
      </Form.Group>
    ))(args),
};

export const Status: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <Form.Group>
        <Select {...props} label="Base" />
        <Select {...props} label="Error" status="error" />
        <Select {...props} label="Success" status="success" />
        <Select {...props} label="Warning" status="warning" />
      </Form.Group>
    ))(args),
};

export const HelperAndValidation: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <Form.Group>
        <Select
          {...props}
          helper="This is the Input component helper."
          label="With helper"
        />
        <Select
          {...props}
          helper="This is the Input component validation message."
          label="With validation message"
          status="error"
        />
        <Select
          {...props}
          helper="This is the Input component helper."
          label="With floating helper"
          hasFloatingHelper
        />
        <Select
          {...props}
          helper="This is the Input component validation message."
          label="With floating validation message"
          status="error"
          hasFloatingHelper
        />
        <Select
          {...props}
          hideLabel
          helper="This is the Input component helper."
          label="With floating helper"
          hasFloatingHelper
        />
        <Select
          {...props}
          hideLabel
          helper="This is the Input component validation message."
          label="With floating validation message"
          status="error"
          hasFloatingHelper
        />
      </Form.Group>
    ))(args),
};
