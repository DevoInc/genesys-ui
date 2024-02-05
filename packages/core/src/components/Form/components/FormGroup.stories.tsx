import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { InputControl, Form } from '../..';

const meta: Meta<typeof Form.Group> = {
  title: 'Components/Core/Form/Form/Components',
  component: Form.Group,
  args: {
    direction: 'column',
  },
};

export default meta;
type Story = StoryObj<typeof Form.Group>;

export const Group: Story = {
  args: {
    children: (
      <>
        <InputControl aria-label="Input label" />
        <InputControl aria-label="Input label" />
      </>
    ),
  },
};
