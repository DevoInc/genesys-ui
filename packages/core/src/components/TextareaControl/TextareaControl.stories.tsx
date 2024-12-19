import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { TextareaControl } from './TextareaControl';
import { VFlex } from '../VFlex';
import { Form } from '../Form';

const meta: Meta<typeof TextareaControl> = {
  title: 'Components/Form/TextareaControl',
  component: TextareaControl,
  args: {
    size: 'md',
    status: 'base',
    rows: 4,
  },
  argTypes: {
    // because the storybook doesn't recognize the WithRequired utility
    'aria-label': { type: { required: true } as never },
    onChange: { action: 'onChange' },
  },
};

export default meta;
type Story = StoryObj<typeof TextareaControl>;

export const Playground: Story = {
  render: (args) =>
    ((props) => (
      <VFlex maxWidth="72rem">
        <TextareaControl {...props} />
      </VFlex>
    ))(args),
  args: {
    value: 'Content of the textarea ...',
  },
};

export const DisabledAndReadonly: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <Form.Group>
        <TextareaControl {...props} disabled aria-label="Disabled" />
        <TextareaControl
          {...props}
          readOnly
          aria-label="Readonly"
          value="Readonly value"
        />
      </Form.Group>
    ))(args),
};

export const Status: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <Form.Group>
        <TextareaControl {...props} placeholder="Base" aria-label="Base" />
        <TextareaControl
          {...props}
          placeholder="Error"
          aria-label="Error"
          status="error"
        />
        <TextareaControl
          {...props}
          placeholder="Success"
          aria-label="Success"
          status="success"
        />
        <TextareaControl
          {...props}
          placeholder="Warning"
          aria-label="Warning"
          status="warning"
        />
      </Form.Group>
    ))(args),
};
