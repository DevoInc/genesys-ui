import { Meta, StoryObj } from '@storybook/react';

import { Form } from '../../Form';

const meta: Meta<typeof Form.Legend> = {
  title: 'Components/Form/Form/Components',
  component: Form.Legend,
  args: {
    text: 'Legend',
  },
};

export default meta;
type Story = StoryObj<typeof Form.Legend>;

export const Legend: Story = {};
