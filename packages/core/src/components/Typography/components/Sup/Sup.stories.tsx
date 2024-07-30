import { Meta, StoryObj } from '@storybook/react';

import { Sup } from './Sup';

const meta: Meta<typeof Sup> = {
  title: 'Components/Text/Typography/Inline',
  component: Sup,
};

export default meta;
type Story = StoryObj<typeof Sup>;

export const BaseSup: Story = {
  args: {
    children: 'Sup text',
  },
};
