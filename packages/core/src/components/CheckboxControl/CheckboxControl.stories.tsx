import { Meta, StoryObj } from '@storybook/react';

import { CheckboxControl } from './CheckboxControl';

const meta: Meta<typeof CheckboxControl> = {
  title: 'Components/Core/Form/CheckboxControl',
  component: CheckboxControl,
  args: {
    'aria-label': 'Checkbox label',
    status: 'base',
    size: 'md',
  },
  argTypes: {
    'aria-label': {
      type: { name: 'string', required: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxControl>;

export const Base: Story = {};
