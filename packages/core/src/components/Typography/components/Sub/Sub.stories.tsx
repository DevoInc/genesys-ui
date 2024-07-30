import { Meta, StoryObj } from '@storybook/react';

import { Sub } from './Sub';

const meta: Meta<typeof Sub> = {
  title: 'Components/Text/Typography/Inline',
  component: Sub,
};

export default meta;
type Story = StoryObj<typeof Sub>;

export const BaseSub: Story = {
  args: {
    children: 'Sub text',
  },
};
