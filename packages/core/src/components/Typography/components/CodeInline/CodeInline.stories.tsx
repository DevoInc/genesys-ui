import { Meta, StoryObj } from '@storybook/react';

import { CodeInline } from './CodeInline';

const meta: Meta<typeof CodeInline> = {
  title: 'Components/Text/Typography/Inline',
  component: CodeInline,
};

export default meta;
type Story = StoryObj<typeof CodeInline>;

export const BaseCodeInLine: Story = {
  args: {
    children: 'const test = true',
  },
};
