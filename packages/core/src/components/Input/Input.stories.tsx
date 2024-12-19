import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { GIMailPostCard } from '@devoinc/genesys-icons';
import { Form } from '../Form';
import { Input } from './Input';
import {
  getValidation,
  ValidationMsg,
  validationMsgs,
} from './__stories__/validation';

const meta: Meta<typeof Input> = {
  title: 'Components/Form/Input',
  component: Input,
  args: {
    // Default
    hasWideControl: true,
    labelPosition: 'top',
    size: 'md',
    status: 'base',
    type: 'text',
    // Meant for the story
    id: 'input-id',
    label: 'Label for story',
  },
  argTypes: {
    helper: {
      control: {
        type: 'text',
      },
    },
    label: {
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
type Story = StoryObj<typeof Input>;

export const Playground: Story = {};

export const DisabledAndReadonly: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <Form.Group>
        <Input {...props} disabled label="Disabled" />
        <Input {...props} readOnly label="Readonly" value="Readonly value" />
      </Form.Group>
    ))(args),
};

export const LabelPosition: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <Form.Group>
        <Input {...props} label="Label on top" />
        <Input {...props} label="Label to the left" labelPosition="left" />
        <Input {...props} label="Label space between" labelPosition="between" />
      </Form.Group>
    ))(args),
};

export const Status: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <Form.Group>
        <Input {...props} label="Base" />
        <Input {...props} label="Error" status="error" />
        <Input {...props} label="Success" status="success" />
        <Input {...props} label="Warning" status="warning" />
      </Form.Group>
    ))(args),
};

export const Types: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <Form.Group>
        <Input {...props} label="Text" />
        <Input {...props} label="Color" type="color" />
        <Input {...props} label="Date" type="date" />
        <Input {...props} label="Datetime-local" type="datetime-local" />
        <Input {...props} label="Email" type="email" />
        <Input {...props} label="File" type="file" />
        <Input {...props} label="Hidden" type="hidden" />
        <Input {...props} label="Image" type="image" />
        <Input {...props} label="Month" type="month" />
        <Input {...props} label="Number" type="number" />
        <Input {...props} label="Password" type="password" />
        <Input {...props} label="Range" type="range" />
        <Input {...props} label="Search" type="search" />
        <Input {...props} label="Tel" type="tel" />
        <Input {...props} label="Time" type="time" />
        <Input {...props} label="Url" type="url" />
        <Input {...props} label="Week" type="week" />
      </Form.Group>
    ))(args),
};

export const HelperAndValidation: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <Form.Group>
        <Input
          {...props}
          helper="This is the Input component helper."
          label="With helper"
        />
        <Input
          {...props}
          helper="This is the Input component validation message."
          label="With validation message"
          status="error"
        />
        <Input
          {...props}
          helper="This is the Input component helper."
          label="With floating helper"
          hasFloatingHelper
        />
        <Input
          {...props}
          helper="This is the Input component validation message."
          label="With floating validation message"
          status="error"
          hasFloatingHelper
        />
        <Input
          {...props}
          hideLabel
          helper="This is the Input component helper."
          label="With floating helper"
          hasFloatingHelper
        />
        <Input
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

export const WithIcon: Story = {
  tags: ['isHidden'],
  args: {
    label: 'Address',
    icon: <GIMailPostCard />,
  },
};

export const WithAddons: Story = {
  tags: ['isHidden'],
  args: {
    label: 'Web name',
    addonToLeft: 'www.',
    addonToRight: '.com',
  },
};

export const SimpleValidation: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      const [validation, setValidation] = React.useState<ValidationMsg>(
        validationMsgs.idle,
      );

      const handleChange = React.useCallback((text: string) => {
        return setValidation(getValidation(text));
      }, []);

      return (
        <Input
          label="Email"
          id="validation"
          onChange={(e) => handleChange((e.target as HTMLInputElement).value)}
          helper={validation.helper}
          status={validation.status}
        />
      );
    })(),
};
