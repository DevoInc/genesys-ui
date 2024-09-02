import { Meta, StoryObj } from '@storybook/react';

import { BlockQuote } from './BlockQuote';
import { lorem } from '../../../../../stories/utils/fillerTexts';

const meta: Meta<typeof BlockQuote> = {
  title: 'Components/Text/Typography/Block',
  component: BlockQuote,
};

export default meta;
type Story = StoryObj<typeof BlockQuote>;

export const BaseBlockQuote: Story = {
  tags: ['isHidden'],
  args: {
    children: lorem,
  },
};
