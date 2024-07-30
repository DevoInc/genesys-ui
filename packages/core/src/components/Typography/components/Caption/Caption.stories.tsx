import { Meta, StoryObj } from '@storybook/react';

import { Caption } from '../Caption';
import { lorem } from '../../../../../stories/utils/fillerTexts';

const meta: Meta<typeof Caption> = {
  title: 'Components/Text/Typography/Block',
  component: Caption,
};

export default meta;
type Story = StoryObj<typeof Caption>;

export const BaseCaption: Story = {
  args: {
    children: lorem,
  },
};
