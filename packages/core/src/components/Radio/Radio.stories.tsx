import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Radio } from './Radio';
import { Form } from '../Form';
import { RadioGroup } from '../RadioGroup';

const meta: Meta<typeof Radio> = {
  title: 'Components/Form/Radio',
  component: Radio,
  args: {
    // Meant for the story
    id: 'radio-id',
    label: 'Label for story',
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
type Story = StoryObj<typeof Radio>;

export const Playground: Story = {};

export const Disabled: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <Form.Group>
        <Radio {...props} id="disabled-one" disabled label="Disabled" />
        <Radio
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
        <Radio {...props} id="base" label="Base" />
        <Radio {...props} id="base" label="Base" defaultChecked />
        <Radio {...props} id="error" label="Error" status="error" />
        <Radio
          {...props}
          id="error"
          label="Error"
          status="error"
          defaultChecked
        />
        <Radio {...props} id="success" label="Success" status="success" />
        <Radio
          {...props}
          id="success"
          label="Success"
          status="success"
          defaultChecked
        />
        <Radio {...props} id="warning" label="Warning" status="warning" />
        <Radio
          {...props}
          id="warning"
          label="Warning"
          status="warning"
          defaultChecked
        />
      </Form.Group>
    ))(args),
};

export const Group: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <RadioGroup legend="RadioGroup wrapping several Radio components">
        <Radio {...props} id="group-one" name="SB example" label="Radio one" />
        <Radio {...props} id="group-two" name="SB example" label="Radio two" />
        <Radio
          {...props}
          id="group-three"
          name="SB example"
          label="Radio three"
        />
        <Radio
          {...props}
          id="group-four"
          name="SB example"
          label="Radio four"
        />
      </RadioGroup>
    ))(args),
};

export const HelperAndValidation: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <Form.Group>
        <Radio
          {...props}
          id="helper-1"
          helper="This is the Input component helper."
          label="With helper"
        />
        <Radio
          {...props}
          id="helper-2"
          helper="This is the Input component validation message."
          label="With validation message"
          status="error"
        />
        <Radio
          {...props}
          id="helper-3"
          helper="This is the Input component helper."
          label="With floating helper"
          hasFloatingHelper
        />
        <Radio
          {...props}
          id="helper-4"
          helper="This is the Input component validation message."
          label="With floating validation message"
          status="error"
          hasFloatingHelper
        />
        <Radio
          {...props}
          id="helper-5"
          hideLabel
          helper="This is the Input component helper."
          label="With floating helper"
          hasFloatingHelper
        />
        <Radio
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
