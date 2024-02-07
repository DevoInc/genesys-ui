import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, Loader, Typography } from '../..';
import { lorem, lorem2, lorem3 } from '../../../stories/utils/fillerTexts';

const meta: Meta<typeof Loader> = {
  title: 'Components/Core/Feedback/Loader',
  component: Loader,
  args: {
    colorScheme: 'inherited',
    size: 'md',
    zIndex: 10,
    type: 'spinner',
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Base: Story = {
  render: (args) => (
    <Box position="relative">
      <Typography.Paragraph gutterBottom="cmp-md">{lorem}</Typography.Paragraph>
      <Typography.Paragraph gutterBottom="cmp-md">
        {lorem2}
      </Typography.Paragraph>
      <Typography.Paragraph gutterBottom="cmp-md">
        {lorem3}
      </Typography.Paragraph>
      <Typography.Paragraph gutterBottom="cmp-md">
        {lorem3}
      </Typography.Paragraph>
      <Typography.Paragraph gutterBottom="cmp-md">
        {lorem2}
      </Typography.Paragraph>
      <Typography.Paragraph>{lorem}</Typography.Paragraph>
      <Loader {...args} />
    </Box>
  ),
};
