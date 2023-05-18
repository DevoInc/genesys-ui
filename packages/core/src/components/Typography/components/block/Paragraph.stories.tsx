import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../../..';
import { lorem } from '../../../../../stories/utils/fillerTexts';

const meta: Meta<typeof Typography.Paragraph> = {
  title: 'Components/Core/Text/Typography/Block/Paragraph',
  component: Typography.Paragraph,
};

export default meta;
type Story = StoryObj<typeof Typography.Paragraph>;

export const Base: Story = {
  args: {
    children: lorem,
  },
};
