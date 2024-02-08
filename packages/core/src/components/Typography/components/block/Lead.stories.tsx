import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../../..';
import { lorem } from '../../../../../stories/utils/fillerTexts';

const meta: Meta<typeof Typography.Lead> = {
  title: 'Components/Text/Typography/Block',
  component: Typography.Lead,
};

export default meta;
type Story = StoryObj<typeof Typography.Lead>;

export const Lead: Story = {
  args: {
    children: lorem,
  },
};
