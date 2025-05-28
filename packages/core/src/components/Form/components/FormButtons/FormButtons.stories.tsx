import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Form } from '../../Form';
import { Button } from '../../../Button';

const meta: Meta<typeof Form.Buttons> = {
  title: 'Components/Form/Form/Components/FormButtons',
  component: Form.Buttons,
  args: {
    buttonsPosition: 'right',
    alignItems: 'center',
  },
};

export default meta;
type Story = StoryObj<typeof Form.Buttons>;

export const Playground: Story = {
  args: {
    helper: 'This is the helper',
    children: [
      <Button key={1}>Cancel</Button>,
      <Button key={2} colorScheme="accent">
        Save
      </Button>,
    ],
  },
};
