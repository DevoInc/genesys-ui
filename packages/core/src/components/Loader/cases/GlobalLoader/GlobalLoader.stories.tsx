import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, Typography, GlobalLoader } from '../../..';
import {
  lorem,
  lorem2,
  lorem3,
} from '../../../../../stories/utils/fillerTexts';

const meta: Meta<typeof GlobalLoader> = {
  title: 'Components/Core/feedback/Loader/GlobalLoader',
  component: GlobalLoader,
  args: {
    zIndex: 999999,
    type: 'logo',
  },
};

export default meta;
type Story = StoryObj<typeof GlobalLoader>;

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
      <GlobalLoader {...args} />
    </Box>
  ),
};
