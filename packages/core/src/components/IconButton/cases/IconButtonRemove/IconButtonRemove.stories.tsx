import { Meta, StoryObj } from '@storybook/react-vite';

import { IconButtonRemove } from './IconButtonRemove';

const meta: Meta<typeof IconButtonRemove> = {
  title: 'Components/Button/IconButtonRemove',
  component: IconButtonRemove,
  args: {
    colorScheme: 'blend-base',
    state: 'enabled',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof IconButtonRemove>;

export const Playground: Story = {
  args: {
    tooltip: 'Remove this block',
  },
};
