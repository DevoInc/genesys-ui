import { Meta, StoryObj } from '@storybook/react';

import { Form } from '../..';

const meta: Meta<typeof Form.Legend> = {
  title: 'Components/Core/Form/Form/Components',
  component: Form.Legend,
  args: {
    text: 'Legend',
  },
};

export default meta;
type Story = StoryObj<typeof Form.Legend>;

export const Legend: Story = {};
