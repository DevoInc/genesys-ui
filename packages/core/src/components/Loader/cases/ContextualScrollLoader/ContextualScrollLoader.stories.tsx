import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, Typography, Loader } from '../../..';
import {
  lorem,
  lorem2,
  lorem3,
} from '../../../../../stories/utils/fillerTexts';

const meta: Meta<typeof Loader.ContextualScroll> = {
  title: 'Components/feedback/Loader/ContextualScroll',
  component: Loader.ContextualScroll,
  args: {
    spinnerOffset: 'cmp-xs',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Loader.ContextualScroll>;

export const Base: Story = {
  render: (args) => (
    <Box position="relative">
      <Box>
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem}
        </Typography.Paragraph>
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
      </Box>
      <Loader.ContextualScroll {...args} />
    </Box>
  ),
};
