import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Radio } from '../Radio/Radio';

import { RadioGroup } from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Form/RadioGroup',
  component: RadioGroup,
  args: {
    children: (
      <>
        <Radio
          id="radio-one-id"
          name="Name for radio"
          label="Radio one"
          defaultChecked
        />
        <Radio id="radio-two-id" name="Name for radio" label="Radio two" />
        <Radio id="radio-three-id" name="Name for radio" label="Radio three" />
      </>
    ),
    direction: 'column',
    hasLegendLabelFormat: true,
    legend: 'Radio group legend',
    legendPosition: 'top',
    status: 'base',
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
type Story = StoryObj<typeof RadioGroup>;

export const Base: Story = {};
