import { Meta, StoryObj } from '@storybook/react';

import { CodeBlock } from './CodeBlock';
import { lorem } from '../../../../../stories/utils/fillerTexts';

const meta: Meta<typeof CodeBlock> = {
  title: 'Components/Text/Typography/Block',
  component: CodeBlock,
};

export default meta;
type Story = StoryObj<typeof CodeBlock>;

export const BaseCodeBlock: Story = {
  args: {
    children: lorem,
  },
};
