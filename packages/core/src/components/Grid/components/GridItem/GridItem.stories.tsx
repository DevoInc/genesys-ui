import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Grid } from '../..';
import { StyledLayoutGridContent } from '../../../../../stories/components/styled';

const meta: Meta<typeof Grid.Item> = {
  title: 'Components/Core/Layout/Grid/Components',
  component: Grid.Item,
};

export default meta;
type Story = StoryObj<typeof Grid.Item>;

export const Base: Story = {
  args: {
    alignSelf: 'center',
    justifySelf: 'center',
    children: (
      <StyledLayoutGridContent height="100px" width="100px">
        Grid.Item content
      </StyledLayoutGridContent>
    ),
  },
};
