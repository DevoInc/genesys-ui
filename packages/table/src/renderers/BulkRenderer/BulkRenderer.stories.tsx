import { Meta, StoryObj } from '@storybook/react';

import { BulkRenderer } from './BulkRenderer';

const meta: Meta<typeof BulkRenderer> = {
  title: 'Components/Table/Renderers/BulkRenderer',
  component: BulkRenderer,
};

export default meta;
type Story = StoryObj<typeof BulkRenderer>;

export const Base: Story = {
  args: {
    value: true,
  },
};
