import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Form } from '../../Form';
import { Button } from '../../../Button';

const meta: Meta<typeof Form.Buttons> = {
  title: 'Components/Form/Form/Components',
  component: Form.Buttons,
  args: {
    buttonsPosition: 'right',
    alignItems: 'center',
  },
};

export default meta;
type Story = StoryObj<typeof Form.Buttons>;

export const Buttons: Story = {
  args: {
    children: (
      <>
        <Button>Cancel</Button>
        <Button colorScheme="accent">Cancel</Button>
      </>
    ),
  },
};
