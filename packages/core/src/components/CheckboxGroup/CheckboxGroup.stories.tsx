import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../Checkbox/Checkbox';

import { CheckboxGroup } from './CheckboxGroup';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Components/Form/CheckboxGroup',
  component: CheckboxGroup,
  args: {
    direction: 'column',
    hasLegendLabelFormat: true,
    legendPosition: 'top',
    status: 'base',
    children: [
      <Checkbox key="1" id="two-one" label="Checkbox one" />,
      <Checkbox key="2" id="two-two" label="Checkbox two" />,
      <Checkbox key="3" id="two-three" label="Checkbox three" />,
    ],
    legend: 'Checkbox group legend',
  },
  argTypes: {
    helper: {
      control: {
        type: 'text',
      },
    },
    legend: {
      type: { required: true } as never,
    },
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

export const Playground: Story = {};

export const WithValidation: Story = {
  tags: ['isHidden'],
  args: {
    status: 'error',
    helper: 'You have to select at least one option of the group.',
  },
};

export const WithHelper: Story = {
  tags: ['isHidden'],
  args: {
    helper: 'This is the helper to give extra info about the fields.',
  },
};

export const WithFloatingHelper: Story = {
  tags: ['isHidden'],
  args: {
    direction: 'row',
    legendPosition: 'left',
    helper: 'This is the helper to give extra info about the fields.',
    hasFloatingHelper: true,
  },
};

export const WithFloatingValidation: Story = {
  tags: ['isHidden'],
  args: {
    ...WithFloatingHelper.args,
    status: 'error',
  },
};

export const Required: Story = {
  tags: ['isHidden'],
  args: {
    required: true,
  },
};

export const Disabled: Story = {
  tags: ['isHidden'],
  args: {
    disabled: true,
  },
};
