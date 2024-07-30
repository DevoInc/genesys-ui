import { Meta, StoryObj } from '@storybook/react';

import { Underlined } from './Underlined';

const meta: Meta<typeof Underlined> = {
  title: 'Components/Text/Typography/Inline',
  component: Underlined,
};

export default meta;
type Story = StoryObj<typeof Underlined>;

export const BaseUnderlined: Story = {
  args: {
    children: 'Underlined text',
  },
};
