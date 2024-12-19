import { Meta, StoryObj } from '@storybook/react';
import { ToolbarGroup } from './ToolbarGroup';
import { Toolbar } from '../../Toolbar';
import { Typography } from '../../../Typography';
import * as React from 'react';

const meta: Meta<typeof ToolbarGroup> = {
  title: 'Components/Layout/Toolbar/Components/ToolbarGroup',
  component: ToolbarGroup,
  args: {
    children: [
      <Toolbar.Item key={1}>
        <Typography.Paragraph>Item One</Typography.Paragraph>
      </Toolbar.Item>,
      <Toolbar.Divider key={2} />,
      <Toolbar.Item key={3}>
        <Typography.Paragraph>Item Two</Typography.Paragraph>
      </Toolbar.Item>,
    ],
  },
};

export default meta;
type Story = StoryObj<typeof ToolbarGroup>;

export const Playground: Story = {};
