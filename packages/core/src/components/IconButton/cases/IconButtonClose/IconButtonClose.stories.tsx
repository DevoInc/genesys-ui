import { Meta, StoryObj } from '@storybook/react';

import { IconButtonClose } from '..';

const meta: Meta<typeof IconButtonClose> = {
  title: 'Components/Button/IconButtonClose',
  component: IconButtonClose,
  args: {
    colorScheme: 'neutral',
    state: 'enabled',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof IconButtonClose>;

export const Base: Story = {};
