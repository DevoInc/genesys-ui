import { Meta, StoryObj } from '@storybook/react';

import { ToolbarDivider } from './ToolbarDivider';

const meta: Meta<typeof ToolbarDivider> = {
  title: 'Components/Layout/Toolbar/Components/ToolbarDivider',
  component: ToolbarDivider,
  args: {},
};

export default meta;
type Story = StoryObj<typeof ToolbarDivider>;

export const Playground: Story = {};
