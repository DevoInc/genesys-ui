import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { List } from './List';

const meta: Meta<typeof List> = {
  title: 'Components/Text/Typography/Block/List',
  component: List,
  args: {
    colorScheme: 'base',
    gutterBottom: 'cmp-md',
    listStyle: 'unordered',
    size: 'md',
    textAlign: 'left',
  },
};

export default meta;
type Story = StoryObj<typeof List>;

export const BaseList: Story = {
  args: {
    children: (
      <>
        <List.Item>Apollonius of Perga take root and flourish.</List.Item>
        <List.Item>
          White dwarf at the edge of forever the sky calls to us tingling of the
          spine citizens.
        </List.Item>
        <List.Item>Apollonius of Perga.</List.Item>
      </>
    ),
  },
};
