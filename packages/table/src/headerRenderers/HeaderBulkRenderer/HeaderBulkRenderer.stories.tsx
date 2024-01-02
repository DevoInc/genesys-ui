import { Meta, StoryObj } from '@storybook/react';

import { HeaderBulkRenderer } from './HeaderBulkRenderer';

const meta: Meta<typeof HeaderBulkRenderer> = {
  title: 'Components/Table/HeaderRenderers/HeaderBulkRenderer',
  component: HeaderBulkRenderer,
};

export default meta;
type Story = StoryObj<typeof HeaderBulkRenderer>;

export const Base: Story = {
  args: {},
};
