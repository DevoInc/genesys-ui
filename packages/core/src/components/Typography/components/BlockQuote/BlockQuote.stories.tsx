import { Meta, StoryObj } from '@storybook/react-vite';

import { BlockQuote } from './BlockQuote';
import { lorem } from '../../../../../stories/utils/fillerTexts';

const meta: Meta<typeof BlockQuote> = {
  title: 'Components/Text/Typography/Components/Block/BlockQuote',
  component: BlockQuote,
  args: {
    children: lorem,
  },
};

export default meta;
type Story = StoryObj<typeof BlockQuote>;

export const Playground: Story = {};
