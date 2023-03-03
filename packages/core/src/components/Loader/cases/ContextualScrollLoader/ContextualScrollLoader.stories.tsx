import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, Typography, ContextualScrollLoader } from '../../..';
import {
  lorem,
  lorem2,
  lorem3,
} from '../../../../../stories/utils/fillerTexts';

const meta: Meta<typeof ContextualScrollLoader> = {
  title: 'Components/Core/feedback/Loader/ContextualScrollLoader',
  component: ContextualScrollLoader,
  args: {
    spinnerOffset: 'cmp-xs',
    size: 'md',
    type: 'spinner',
  },
};

export default meta;
type Story = StoryObj<typeof ContextualScrollLoader>;

export const Base: Story = {
  render: (args) => (
    <Box position="relative">
      <Box>
        <Typography.Paragraph>{lorem}</Typography.Paragraph>
        <Typography.Paragraph>{lorem2}</Typography.Paragraph>
        <Typography.Paragraph>{lorem3}</Typography.Paragraph>
        <Typography.Paragraph>{lorem3}</Typography.Paragraph>
        <Typography.Paragraph>{lorem2}</Typography.Paragraph>
        <Typography.Paragraph>{lorem}</Typography.Paragraph>
      </Box>
      <ContextualScrollLoader {...args} />
    </Box>
  ),
};
