import { Meta, StoryObj } from '@storybook/react';

import { Select2 } from './Select2';

const meta: Meta<typeof Select2> = {
  title: 'Components/Form/Select2',
  component: Select2,
  args: {
    hasWideControl: true,
    id: 'select-id',
    label: 'Label for story',
    labelPosition: 'top',
    size: 'md',
    status: 'base',
    menuLevel: 3,
    menuPlacement: 'auto',
    options: [
      { value: 1, label: 'Option one' },
      { value: 2, label: 'Option two' },
      { value: 3, label: 'Option three', disabled: true },
    ],
    helper: 'This is the helper',
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
type Story = StoryObj<typeof Select2>;

export const Base: Story = {};
