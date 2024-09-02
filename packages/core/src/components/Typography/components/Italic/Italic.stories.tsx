import { Meta, StoryObj } from '@storybook/react';

import { Italic } from './Italic';

const meta: Meta<typeof Italic> = {
  title: 'Components/Text/Typography/Inline',
  component: Italic,
};

export default meta;
type Story = StoryObj<typeof Italic>;

export const BaseItalic: Story = {
  tags: ['isHidden'],
  args: {
    children: 'A random caption',
  },
};
