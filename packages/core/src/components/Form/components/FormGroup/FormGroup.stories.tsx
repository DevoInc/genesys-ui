import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Form } from '../../Form';
import { InputControl } from '../../../InputControl';
import { Typography } from '../../../Typography';
import { HFlex } from '../../../HFlex';
import { lorem } from '../../../../../stories/utils/fillerTexts';
import { Input } from '../../../Input';
import { Button } from '../../../Button';

const meta: Meta<typeof Form.Group> = {
  title: 'Components/Form/Form/Components/FormGroup',
  component: Form.Group,
  args: {
    direction: 'column',
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
type Story = StoryObj<typeof Form.Group>;

export const Playground: Story = {
  args: {
    asFieldset: true,
    legend: 'FormGroup legend',
    children: [
      <InputControl key={1} aria-label="Input label" />,
      <InputControl key={2} aria-label="Input label" />,
    ],
  },
};

export const Direction: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <Form>
        <Form.Group {...props} legend="Column">
          <Input id="item-sb-1" label="Input label" />
          <Input id="item-sb-2" label="Input label" />
        </Form.Group>
        <Form.Group {...props} direction="row" legend="Row">
          <Form.Item flex="1 1 40%">
            <Input id="item-sb-1" label="Input label" />
          </Form.Item>
          <Form.Item flex="1 1 60%">
            <Input id="item-sb-2" label="Input label" />
          </Form.Item>
          <Form.Item alignSelf="flex-end">
            <Button>Add</Button>
          </Form.Item>
        </Form.Group>
      </Form>
    ))(args),
};

export const Boxed: Story = {
  tags: ['isHidden'],
  args: {
    legend: 'Form group legend',
    boxed: true,
    children: [
      <InputControl key={1} aria-label="Input label" />,
      <InputControl key={2} aria-label="Input label" />,
    ],
  },
};

export const Disabled: Story = {
  tags: ['isHidden'],
  args: {
    legend: 'Form group legend',
    disabled: true,
    children: [
      <InputControl key={1} aria-label="Input label" />,
      <InputControl key={2} aria-label="Input label" />,
    ],
  },
};

export const AsFieldset: Story = {
  tags: ['isHidden'],
  args: {
    legend: 'Form group legend',
    asFieldset: true,
    disabled: true,
    children: [
      <InputControl key={1} aria-label="Input label" />,
      <InputControl key={2} aria-label="Input label" />,
    ],
  },
};

export const Collapsable: Story = {
  tags: ['isHidden'],
  args: {
    collapsable: true,
    legend: (
      <HFlex inline spacing="cmp-xs">
        MITRE ATTACK tags
        <Typography.Caption colorScheme="weaker">(V15.1)</Typography.Caption>
      </HFlex>
    ),
    helper: lorem,
    hasFloatingHelper: true,
    children: [
      <InputControl key={1} aria-label="Input label" />,
      <InputControl key={2} aria-label="Input label" />,
    ],
  },
};
