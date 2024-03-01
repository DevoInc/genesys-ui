import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { IconButton } from '../..';
import { GIHeartFull } from '@devoinc/genesys-icons';

const meta: Meta<typeof IconButton> = {
  title: 'Components/Button/IconButton',
  component: IconButton,
  args: {
    colorScheme: 'neutral',
    state: 'enabled',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Base: Story = {
  args: {
    icon: <GIHeartFull />,
    tooltip: 'Favourite',
  },
};
