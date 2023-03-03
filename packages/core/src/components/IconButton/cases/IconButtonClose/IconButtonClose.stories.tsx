import { Meta, StoryObj } from '@storybook/react';

import { IconButtonClose } from '..';

const meta: Meta<typeof IconButtonClose> = {
  title: 'Components/Core/Button/IconButtonClose',
  component: IconButtonClose,
  args: {
    state: 'enabled',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof IconButtonClose>;

export const Base: Story = {};
