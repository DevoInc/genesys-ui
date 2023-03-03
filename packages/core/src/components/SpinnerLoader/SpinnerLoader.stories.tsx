import { Meta, StoryObj } from '@storybook/react';

import { SpinnerLoader } from '..';

const meta: Meta<typeof SpinnerLoader> = {
  title: 'Components/Core/Feedback/SpinnerLoader',
  component: SpinnerLoader,
  args: {
    colorScheme: 'dark',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof SpinnerLoader>;

export const Base: Story = {};
