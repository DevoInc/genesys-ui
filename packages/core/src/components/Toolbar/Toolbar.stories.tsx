import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Toolbar } from '.';
import { Typography } from '../Typography';

const meta: Meta<typeof Toolbar> = {
  title: 'Components/Layout/Toolbar',
  component: Toolbar,
  args: {
    alignItems: 'center',
    gap: 'layout-xs',
    size: 'md',
    elevation: 'stickyBottom',
    justifyContent: 'space-between',
    padding: '0 cmp-sm',
    role: 'group',
  },
};

export default meta;
type Story = StoryObj<typeof Toolbar>;

export const Base: Story = {
  args: {
    children: (
      <>
        <Toolbar.Group>
          <Toolbar.Item>
            <Typography.Paragraph>Item One - G1</Typography.Paragraph>
          </Toolbar.Item>
          <Toolbar.Divider />
          <Toolbar.Item>
            <Typography.Paragraph>Item Two - G1</Typography.Paragraph>
          </Toolbar.Item>
        </Toolbar.Group>
        <Toolbar.Group>
          <Toolbar.Item>
            <Typography.Paragraph>Item One - G2</Typography.Paragraph>
          </Toolbar.Item>
        </Toolbar.Group>
        <Toolbar.Group marginLeft="auto" justifyContent="flex-end">
          <Toolbar.Item>
            <Typography.Paragraph>Item One - G3</Typography.Paragraph>
          </Toolbar.Item>
        </Toolbar.Group>
      </>
    ),
  },
};
