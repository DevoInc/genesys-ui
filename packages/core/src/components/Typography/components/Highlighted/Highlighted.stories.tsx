import { Meta, StoryObj } from '@storybook/react';

import { Highlighted } from './Highlighted';

const meta: Meta<typeof Highlighted> = {
  title: 'Components/Text/Typography/Inline',
  component: Highlighted,
};

export default meta;
type Story = StoryObj<typeof Highlighted>;

export const BaseHighlighted: Story = {
  args: {
    children: 'Important text',
  },
};
