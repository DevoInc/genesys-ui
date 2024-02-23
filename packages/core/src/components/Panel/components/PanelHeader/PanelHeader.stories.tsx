import { Meta, StoryObj } from '@storybook/react';

import { PanelHeader } from './PanelHeader';

const meta: Meta<typeof PanelHeader> = {
  title: 'Components/Layout/Panel/Components',
  component: PanelHeader,
  args: {
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof PanelHeader>;

export const Header: Story = {
  args: {
    title: 'Header title',
  },
};
