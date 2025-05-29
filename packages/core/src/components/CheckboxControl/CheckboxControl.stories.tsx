import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { CheckboxControl } from './CheckboxControl';

const meta: Meta<typeof CheckboxControl> = {
  title: 'Components/Form/CheckboxControl',
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

export const Playground: Story = {};

export const Uncontrolled: Story = {
  tags: ['isHidden'],
  args: { 'aria-label': 'checkbox' },
};

export const Controlled: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      const [checked, setChecked] = React.useState(false);
      return (
        <CheckboxControl
          aria-label="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      );
    })(),
};

export const Indeterminate: Story = {
  tags: ['isHidden'],
  args: {
    'aria-label': 'checkbox',
    checked: true,
    indeterminate: true,
  },
};
