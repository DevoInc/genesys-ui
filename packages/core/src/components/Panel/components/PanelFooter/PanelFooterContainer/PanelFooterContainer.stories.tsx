import { Meta, StoryObj } from '@storybook/react';

import { PanelFooterContainer } from './PanelFooterContainer';

const meta: Meta<typeof PanelFooterContainer> = {
  title: 'Components/Core/Layout/Panel/Subcomponents',
  component: PanelFooterContainer,
};

export default meta;
type Story = StoryObj<typeof PanelFooterContainer>;

export const Footer: Story = {
  args: {
    children: 'Footer',
  },
};
