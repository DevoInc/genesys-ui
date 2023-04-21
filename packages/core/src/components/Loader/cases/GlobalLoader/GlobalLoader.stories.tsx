import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, Typography, Loader } from '../../..';
import {
  lorem,
  lorem2,
  lorem3,
} from '../../../../../stories/utils/fillerTexts';

const meta: Meta<typeof Loader.Global> = {
  title: 'Components/Core/feedback/Loader/Global',
  component: Loader.Global,
  args: {
    zIndex: 999999,
    type: 'logo',
  },
};

export default meta;
type Story = StoryObj<typeof Loader.Global>;

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
      <Loader.Global {...args} />
    </Box>
  ),
};
