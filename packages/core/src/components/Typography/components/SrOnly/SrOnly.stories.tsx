import { Meta, StoryObj } from '@storybook/react';

import { SrOnly } from './SrOnly';

const meta: Meta<typeof SrOnly> = {
  title: 'Components/Text/Typography/Components/Inline/SrOnly',
  component: SrOnly,
  args: {
    children: 'Hidden, but accessible content',
  },
};

export default meta;
type Story = StoryObj<typeof SrOnly>;

export const Playground: Story = {};
