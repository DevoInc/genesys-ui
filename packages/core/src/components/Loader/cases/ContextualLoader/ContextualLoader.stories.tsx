import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, Typography, Loader } from '../../..';
import {
  lorem,
  lorem2,
  lorem3,
} from '../../../../../stories/utils/fillerTexts';

const meta: Meta<typeof Loader.Contextual> = {
  title: 'Components/Core/feedback/Loader/Contextual',
  component: Loader.Contextual,
  args: {
    colorScheme: 'inherited',
    size: 'md',
    type: 'spinner',
  },
};

export default meta;
type Story = StoryObj<typeof Loader.Contextual>;

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
        <Typography.Paragraph gutterBottom="cmp-md">
          {lorem}
        </Typography.Paragraph>
      </Box>
      <Loader.Contextual {...args} />
    </Box>
  ),
};
