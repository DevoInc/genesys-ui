import { Meta, StoryObj } from '@storybook/react';

import { Helper } from './Helper';

const meta: Meta<typeof Helper> = {
  title: 'Components/Core/Feedback/Helper',
  component: Helper,
  args: { size: 'md', status: 'base' },
};

export default meta;
type Story = StoryObj<typeof Helper>;

export const Base: Story = {
  args: {
    message:
      "Zip Code must be in the format of '#####' or '#####-####', example: '32334' or '32334-0092'",
  },
};
