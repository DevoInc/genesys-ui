import { Meta, StoryObj } from '@storybook/react';

import { Abbr } from './Abbr';

const meta: Meta<typeof Abbr> = {
  title: 'Components/Text/Typography/Inline',
  component: Abbr,
};

export default meta;
type Story = StoryObj<typeof Abbr>;

export const BaseAbbr: Story = {
  args: {
    children: 'HTML',
  },
};
