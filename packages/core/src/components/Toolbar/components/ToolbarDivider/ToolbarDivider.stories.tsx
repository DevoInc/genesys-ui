import { Meta, StoryObj } from '@storybook/react-vite';

import { ToolbarDivider } from './ToolbarDivider';

const meta: Meta<typeof ToolbarDivider> = {
  title: 'Components/Layout/Toolbar/Components/ToolbarDivider',
  component: ToolbarDivider,
  args: {},
};

export default meta;
type Story = StoryObj<typeof ToolbarDivider>;

export const Playground: Story = {};
