import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../../..';

const meta: Meta<typeof Typography.List> = {
  title: 'Components/Text/Typography/Block/List',
  component: Typography.List,
  args: {
    colorScheme: 'base',
    gutterBottom: 'cmp-md',
    listStyle: 'unordered',
    size: 'md',
    textAlign: 'left',
  },
};

export default meta;
type Story = StoryObj<typeof Typography.List>;

export const List: Story = {
  args: {
    children: (
      <>
        <Typography.List.Item>
          Apollonius of Perga take root and flourish.
        </Typography.List.Item>
        <Typography.List.Item>
          White dwarf at the edge of forever the sky calls to us tingling of the
          spine citizens.
        </Typography.List.Item>
        <Typography.List.Item>Apollonius of Perga.</Typography.List.Item>
      </>
    ),
  },
};
