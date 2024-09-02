import { Meta, StoryObj } from '@storybook/react';

import { Lead } from './Lead';
import { lorem } from '../../../../../stories/utils/fillerTexts';

const meta: Meta<typeof Lead> = {
  title: 'Components/Text/Typography/Block',
  component: Lead,
};

export default meta;
type Story = StoryObj<typeof Lead>;

export const BaseLead: Story = {
  tags: ['isHidden'],
  args: {
    children: lorem,
  },
};
