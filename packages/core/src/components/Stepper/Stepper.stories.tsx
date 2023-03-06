import { Meta, StoryObj } from '@storybook/react';

import { Stepper, StepperProps } from '..';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Core/Navigation/Stepper',
  component: Stepper,
  args: {
    size: 'sm',
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const initialSteps: StepperProps['steps'] = [
  { name: 'OPT_1', label: 'Option 1', status: 'pending' },
  { name: 'OPT_2', label: 'Option 2', status: 'pending' },
  { name: 'OPT_3', label: 'Option 3', status: 'pending' },
  { name: 'OPT_4', label: 'Option 4', status: 'disabled' },
];

export const Base: Story = {
  args: { steps: initialSteps, 'aria-label': 'Stepper aria-label' },
};
