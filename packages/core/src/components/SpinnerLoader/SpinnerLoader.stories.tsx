import { Meta, StoryObj } from '@storybook/react';

import { SpinnerLoader } from './SpinnerLoader';

const meta: Meta<typeof SpinnerLoader> = {
  title: 'Components/Feedback/SpinnerLoader',
  component: SpinnerLoader,
  args: {
    colorScheme: 'dark',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof SpinnerLoader>;

export const Base: Story = {};
