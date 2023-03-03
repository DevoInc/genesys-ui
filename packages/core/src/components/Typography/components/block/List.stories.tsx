import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../../..';

const meta: Meta<typeof Typography.List> = {
  title: 'Components/Core/Text/Typography/Block',
  component: Typography.List,
};

export default meta;
type Story = StoryObj<typeof Typography.List>;

export const List: Story = {
  args: {
    children: (
      <>
        <Typography.ListItem>
          Apollonius of Perga take root and flourish.
        </Typography.ListItem>
        <Typography.ListItem>
          White dwarf at the edge of forever the sky calls to us tingling of the
          spine citizens.
        </Typography.ListItem>
        <Typography.ListItem>Apollonius of Perga.</Typography.ListItem>
      </>
    ),
  },
};
