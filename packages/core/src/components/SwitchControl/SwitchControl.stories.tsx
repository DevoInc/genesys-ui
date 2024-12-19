import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { SwitchControl } from './SwitchControl';
import { Form } from '../Form';

const meta: Meta<typeof SwitchControl> = {
  title: 'Components/Form/SwitchControl',
  component: SwitchControl,
  args: {
    'aria-label': 'Story label',
    size: 'md',
    status: 'base',
  },
  argTypes: {
    'aria-label': {
      type: { required: true } as never,
    },
  },
};

export default meta;
type Story = StoryObj<typeof SwitchControl>;

export const Base: Story = {
  render: (args) =>
    ((props) => {
      const [checked, setChecked] = React.useState(false);
      return (
        <SwitchControl
          {...props}
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      );
    })(args),
};

export const Disabled: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      return (
        <Form.Group childrenFitFullWidth={false}>
          <SwitchControl {...props} disabled />
          <SwitchControl {...props} defaultChecked disabled />
        </Form.Group>
      );
    })(args),
};

export const Status: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      return (
        <Form.Group childrenFitFullWidth={false}>
          <SwitchControl {...props} />
          <SwitchControl {...props} defaultChecked />
          <SwitchControl {...props} status="error" />
          <SwitchControl {...props} status="error" defaultChecked />
          <SwitchControl {...props} status="success" />
          <SwitchControl {...props} status="success" defaultChecked />
          <SwitchControl {...props} status="warning" />
          <SwitchControl {...props} status="warning" defaultChecked />
        </Form.Group>
      );
    })(args),
};
