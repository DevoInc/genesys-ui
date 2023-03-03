import { Meta, StoryObj } from '@storybook/react';

import { FloatingHelper } from './FloatingHelper';

const meta: Meta<typeof FloatingHelper> = {
  title: 'Components/Core/Feedback/Helper/FloatingHelper',
  component: FloatingHelper,
  args: { visible: false, size: 'md', status: 'base' },
};

export default meta;
type Story = StoryObj<typeof FloatingHelper>;

export const Base: Story = {
  args: {
    message:
      "Zip Code must be in the format of '#####' or '#####-####', example: '32334' or '32334-0092'",
  },
};
