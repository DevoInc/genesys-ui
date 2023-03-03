import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../Checkbox/Checkbox';

import { CheckboxGroup } from './CheckboxGroup';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Components/Form/CheckboxGroup',
  component: CheckboxGroup,
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

export const Base: Story = {
  args: {
    children: (
      <>
        <Checkbox id="" label="Checkbox one" />
        <Checkbox id="" label="Checkbox two" />
        <Checkbox id="" label="Checkbox three" />
      </>
    ),
    direction: 'column',
    hasLegendLabelFormat: true,
    legend: 'Checkbox group legend',
    legendPosition: 'top',
    status: 'base',
  },
};
