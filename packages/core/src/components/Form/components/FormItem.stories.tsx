import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Form } from '../Form';
import { InputControl } from '../../InputControl';

const meta: Meta<typeof Form.Item> = {
  title: 'Components/Form/Form/Components',
  component: Form.Item,
};

export default meta;
type Story = StoryObj<typeof Form.Item>;

export const Item: Story = {
  args: {
    children: <InputControl aria-label="Input label" />,
  },
};
