import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../../../';
import { lorem } from '../../../../../stories/utils/fillerTexts';

const meta: Meta<typeof Typography.BlockQuote> = {
  title: 'Components/Core/Text/Typography/Block',
  component: Typography.BlockQuote,
};

export default meta;
type Story = StoryObj<typeof Typography.BlockQuote>;

export const BlockQuote: Story = {
  args: {
    children: lorem,
  },
};
