import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../../..';

const meta: Meta<typeof Typography.CodeInline> = {
  title: 'Components/Core/Text/Typography/Inline',
  component: Typography.CodeInline,
};

export default meta;
type Story = StoryObj<typeof Typography.CodeInline>;

export const CodeInline: Story = {
  args: {
    children: 'const test = true',
  },
};
