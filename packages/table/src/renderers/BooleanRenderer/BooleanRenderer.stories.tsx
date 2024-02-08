import { Meta, StoryObj } from '@storybook/react';

import { BooleanRenderer } from './BooleanRenderer';

const meta: Meta<typeof BooleanRenderer> = {
  title: 'Components/Layout/Table/Renderers/BooleanRenderer',
  component: BooleanRenderer,
};

export default meta;
type Story = StoryObj<typeof BooleanRenderer>;

export const Base: Story = {
  args: {
    value: true,
  },
};
