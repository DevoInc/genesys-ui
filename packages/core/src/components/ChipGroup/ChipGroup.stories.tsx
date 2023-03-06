import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Chip, ChipGroup } from '../';

const meta: Meta<typeof ChipGroup> = {
  title: 'Components/Core/Form/ChipGroup',
  component: ChipGroup,
  args: {
    direction: 'row',
    hasLegendLabelFormat: true,
    legend: 'Chip group legend',
    legendPosition: 'left',
    status: 'base',
  },
  argTypes: {
    helper: {
      control: {
        type: 'text',
      },
    },
    legend: {
      type: { name: 'string', required: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChipGroup>;

export const Base: Story = {
  args: {
    children: (
      <>
        <Chip>Chip one</Chip>
        <Chip>Chip two</Chip>
        <Chip>Chip three</Chip>
      </>
    ),
  },
};
