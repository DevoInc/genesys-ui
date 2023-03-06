import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, SpinnerLoader, IconButton } from '../..';

const meta: Meta<typeof IconButton> = {
  title: 'Components/Core/Button/IconButton/Cases',
  component: IconButton,
  args: {
    colorScheme: 'neutral',
    state: 'enabled',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const WithChildren: Story = {
  args: {
    circular: true,
    icon: 'real_time',
    children: (
      <Box position="absolute" width="100%" height="100%">
        <SpinnerLoader />
      </Box>
    ),
  },
};
