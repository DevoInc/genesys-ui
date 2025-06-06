import { Meta, StoryObj } from '@storybook/react-vite';

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

export const Playground: Story = {
  args: {
    tooltip: 'Close this block',
  },
};
