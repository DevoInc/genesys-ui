import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { ToolBarItem } from './ToolBarItem';
import { Typography } from '../../../Typography';

const meta: Meta<typeof ToolBarItem> = {
  title: 'Components/Layout/Toolbar/Components/ToolBarItem',
  component: ToolBarItem,
  args: {
    children: <Typography.Paragraph>Toolbar item</Typography.Paragraph>,
  },
};

export default meta;
type Story = StoryObj<typeof ToolBarItem>;

export const Playground: Story = {};
