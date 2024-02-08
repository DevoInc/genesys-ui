import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../../..';
import { lorem } from '../../../../../stories/utils/fillerTexts';

const meta: Meta<typeof Typography.Caption> = {
  title: 'Components/Text/Typography/Block',
  component: Typography.Caption,
};

export default meta;
type Story = StoryObj<typeof Typography.Caption>;

export const Caption: Story = {
  args: {
    children: lorem,
  },
};
