import { Meta, StoryObj } from '@storybook/react';

import { PanelFooter } from './PanelFooter';

const meta: Meta<typeof PanelFooter> = {
  title: 'Components/Core/Layout/Panel/Subcomponents',
  component: PanelFooter,
};

export default meta;
type Story = StoryObj<typeof PanelFooter>;

export const Footer: Story = {
  args: {
    children: 'Footer',
  },
};
