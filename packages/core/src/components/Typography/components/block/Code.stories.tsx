import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../../..';
import { lorem } from '../../../../../stories/utils/fillerTexts';

const meta: Meta<typeof Typography.Code> = {
  title: 'Components/Text/Typography/Block',
  component: Typography.Code,
};

export default meta;
type Story = StoryObj<typeof Typography.Code>;

export const Code: Story = {
  args: {
    children: lorem,
  },
};
