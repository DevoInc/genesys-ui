import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Core/Button/Button/Cases',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const MultipleUncontrolled: Story = {
  args: {
    selectionScheme: 'multiple',
    value: 'option',
    children: 'Option',
  },
};

export const MultipleControlled: Story = {
  args: {
    selectionScheme: 'multiple',
    children: 'Option',
  },
  render: (args) =>
    ((args) => {
      const [selected, setSelected] = React.useState(false);
      return (
        <Button
          {...args}
          onChange={() => setSelected(!selected)}
          state={selected ? 'selected' : 'enabled'}
        >
          Option
        </Button>
      );
    })(args),
};

export const SingleUncontrolled: Story = {
  args: {
    selectionScheme: 'single',
    value: 'option',
    children: 'Option',
    name: 'option',
  },
};

export const SingleControlled: Story = {
  args: {
    selectionScheme: 'single',
    value: 'Option',
    children: 'Option',
    name: 'option',
  },
  render: (args) =>
    ((args) => {
      const [selected, setSelected] = React.useState(false);
      return (
        <Button
          {...args}
          onChange={() => setSelected(!selected)}
          state={selected ? 'selected' : 'enabled'}
        >
          Option
        </Button>
      );
    })(args),
};
