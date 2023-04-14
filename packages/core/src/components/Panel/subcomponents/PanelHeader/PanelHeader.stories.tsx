import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { PanelHeader } from './PanelHeader';

const meta: Meta<typeof PanelHeader> = {
  title: 'Components/Core/Layout/Panel/Subcomponents',
  component: PanelHeader,
};

export default meta;
type Story = StoryObj<typeof PanelHeader>;

export const Header: Story = {
  args: {
    bordered: true,
    hasBoxShadow: true,
    children: <div>Hola</div>,
  },
};
