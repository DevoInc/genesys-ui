import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';
import { Form } from '../Form';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
  args: {
    // Meant for the story
    id: 'checkbox-id',
    label: 'Checkbox label',
    // Default
    size: 'md',
    status: 'base',
  },
  argTypes: {
    helper: {
      control: {
        type: 'text',
      },
    },
    // because the storybook doesn't recognize the WithRequired utility
    id: {
      type: { required: true } as never,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Playground: Story = {};

export const Disabled: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <Form.Group>
        <Checkbox {...props} id="disabled-one" disabled label="Disabled" />
        <Checkbox
          {...props}
          id="disabled-two"
          disabled
          defaultChecked
          label="Disabled checked"
        />
      </Form.Group>
    ))(args),
};

export const Status: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <Form.Group>
        <Checkbox {...props} id="base" label="Base" />
        <Checkbox {...props} id="base" label="Base" defaultChecked />
        <Checkbox {...props} id="error" label="Error" status="error" />
        <Checkbox
          {...props}
          id="error"
          label="Error"
          status="error"
          defaultChecked
        />
        <Checkbox {...props} id="success" label="Success" status="success" />
        <Checkbox
          {...props}
          id="success"
          label="Success"
          status="success"
          defaultChecked
        />
        <Checkbox {...props} id="warning" label="Warning" status="warning" />
        <Checkbox
          {...props}
          id="warning"
          label="Warning"
          status="warning"
          defaultChecked
        />
      </Form.Group>
    ))(args),
};

export const HelperAndValidation: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <Form.Group>
        <Checkbox
          {...props}
          id="helper-1"
          helper="This is the Input component helper."
          label="With helper"
        />
        <Checkbox
          {...props}
          id="helper-2"
          helper="This is the Input component validation message."
          label="With validation message"
          status="error"
        />
        <Checkbox
          {...props}
          id="helper-3"
          helper="This is the Input component helper."
          label="With floating helper"
          hasFloatingHelper
        />
        <Checkbox
          {...props}
          id="helper-4"
          helper="This is the Input component validation message."
          label="With floating validation message"
          status="error"
          hasFloatingHelper
        />
        <Checkbox
          {...props}
          id="helper-5"
          hideLabel
          helper="This is the Input component helper."
          label="With floating helper"
          hasFloatingHelper
        />
        <Checkbox
          {...props}
          id="helper-6"
          hideLabel
          helper="This is the Input component validation message."
          label="With floating validation message"
          status="error"
          hasFloatingHelper
        />
      </Form.Group>
    ))(args),
};
