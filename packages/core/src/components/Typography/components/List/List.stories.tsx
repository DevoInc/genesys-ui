import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../../Typography';
import { List } from './List';

const meta: Meta<typeof List> = {
  title: 'Components/Text/Typography/Components/Block/List',
  component: List,
  args: {
    colorScheme: 'base',
    listStyle: 'unordered',
    size: 'md',
    textAlign: 'left',
  },
};

export default meta;
type Story = StoryObj<typeof List>;

export const Playground: Story = {
  args: {
    children: [
      <Typography.List.Item key={1}>
        Apollonius of Perga take root and flourish.
      </Typography.List.Item>,
      <Typography.List.Item key={2}>
        White dwarf at the edge of forever the sky calls to us tingling of the
        spine citizens.
      </Typography.List.Item>,
      <Typography.List.Item key={3}>Apollonius of Perga.</Typography.List.Item>,
    ],
  },
};
