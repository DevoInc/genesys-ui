import { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Form/Select',
  component: Select,
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
      { value: 3, label: 'Option three', isDisabled: true },
    ],
    helper: 'This is the helper',
    isMulti: true,
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
type Story = StoryObj<typeof Select>;

export const Base: Story = {};
