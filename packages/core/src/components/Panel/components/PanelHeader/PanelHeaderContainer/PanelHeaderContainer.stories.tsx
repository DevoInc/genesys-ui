import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { PanelHeaderContainer } from './PanelHeaderContainer';

const meta: Meta<typeof PanelHeaderContainer> = {
  title: 'Components/Core/Layout/Panel/Subcomponents',
  component: PanelHeaderContainer,
};

export default meta;
type Story = StoryObj<typeof PanelHeaderContainer>;

export const Header: Story = {
  args: {
    bordered: true,
    hasBoxShadow: true,
    children: <div>Hola</div>,
  },
};
