import { Meta, StoryObj } from '@storybook/react-vite';

import { CodeBlock } from './CodeBlock';
import { lorem } from '../../../../../stories/utils/fillerTexts';

const meta: Meta<typeof CodeBlock> = {
  title: 'Components/Text/Typography/Components/Block/CodeBlock',
  component: CodeBlock,
  args: {
    children: lorem,
  },
};

export default meta;
type Story = StoryObj<typeof CodeBlock>;

export const Playground: Story = {};
