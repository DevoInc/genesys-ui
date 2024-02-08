import { Meta, StoryObj } from '@storybook/react';
import { SelectOption } from './declarations';

import { SelectControl, SelectControlProps } from './SelectControl';

interface SelectControlOption extends SelectOption {
  isDisabled?: boolean;
}

const meta: Meta<SelectControlProps<SelectControlOption>> = {
  title: 'Components/Form/SelectControl',
  component: SelectControl,
  args: {
    menuAppendToBody: true,
    options: [
      { value: 1, label: 'Option one' },
      { value: 2, label: 'Option two' },
      { value: 3, label: 'Option three', isDisabled: true },
      { value: 4, label: 'Option four' },
      { value: 5, label: 'Option five' },
      { value: 6, label: 'Option six' },
      { value: 7, label: 'Option seven' },
    ],
  },
};

export default meta;
type Story = StoryObj<SelectControlProps<SelectControlOption>>;

export const Base: Story = {};
