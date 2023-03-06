import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { CheckboxControl } from './CheckboxControl';

const meta: Meta<typeof CheckboxControl> = {
  title: 'Components/Core/Form/CheckboxControl/Cases',
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

export const Uncontrolled: Story = {
  args: { 'aria-label': 'checkbox' },
};

export const Controlled: Story = {
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
  render: () =>
    (() => {
      const [checked, setChecked] = React.useState(false);
      return (
        <CheckboxControl
          aria-label="checkbox"
          checked={checked}
          indeterminate
          onChange={() => setChecked(!checked)}
        />
      );
    })(),
};
