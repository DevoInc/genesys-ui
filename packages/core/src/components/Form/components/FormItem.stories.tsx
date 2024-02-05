import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { InputControl, Form } from '../..';

const meta: Meta<typeof Form.Item> = {
  title: 'Components/Core/Form/Form/Components',
  component: Form.Item,
};

export default meta;
type Story = StoryObj<typeof Form.Item>;

export const Item: Story = {
  args: {
    children: <InputControl aria-label="Input label" />,
  },
};
