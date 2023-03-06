import { Meta, StoryObj } from '@storybook/react';

import { Select2Control } from '..';

const meta: Meta<typeof Select2Control> = {
  title: 'Components/Core/Form/Select2Control',
  component: Select2Control,
  args: {
    menuLevel: 3,
    menuPlacement: 'auto',
    options: [
      { value: 1, label: 'Option one' },
      { value: 2, label: 'Option two' },
      { value: 3, label: 'Option three', disabled: true },
      { value: 4, label: 'Option four' },
      { value: 5, label: 'Option five' },
      { value: 6, label: 'Option six' },
      { value: 7, label: 'Option seven' },
    ],
    size: 'md',
    status: 'base',
  },
  argTypes: {
    addonToLeft: { control: { type: 'text' } },
    addonToRight: { control: { type: 'text' } },
  },
};

export default meta;
type Story = StoryObj<typeof Select2Control>;

export const Base: Story = {};
