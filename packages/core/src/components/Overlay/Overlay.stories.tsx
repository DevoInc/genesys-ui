import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, Typography, Overlay } from '..';
import { lorem, lorem2, lorem3 } from '../../../stories/utils/fillerTexts';

const meta: Meta<typeof Overlay> = {
  title: 'Components/Core/Feedback/Overlay',
  component: Overlay,
  args: {
    alignItems: 'center',
    bgColorScheme: 'light',
    fixed: false,
    flexDirection: 'column',
    hasInteractionBehind: false,
    justifyContent: 'center',
    padding: 'cmp-md cmp-lg',
  },
};

export default meta;
type Story = StoryObj<typeof Overlay>;

export const Base: Story = {
  render: (args) => (
    <Box position="relative">
      <Typography.Paragraph gutterBottom="cmp-md">{lorem}</Typography.Paragraph>
      <Typography.Paragraph gutterBottom="cmp-md">
        {lorem2}
      </Typography.Paragraph>
      <Typography.Paragraph>{lorem3}</Typography.Paragraph>
      <Overlay {...args}>Children of Overlay</Overlay>
    </Box>
  ),
};
