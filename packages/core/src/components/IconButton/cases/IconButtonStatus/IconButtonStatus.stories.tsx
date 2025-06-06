import { Meta, StoryObj } from '@storybook/react-vite';

import { IconButtonStatus } from './IconButtonStatus';

const meta: Meta<typeof IconButtonStatus> = {
  title: 'Components/Button/IconButtonStatus',
  component: IconButtonStatus,
  args: {
    state: 'enabled',
    size: 'md',
    colorScheme: 'help',
  },
};

export default meta;
type Story = StoryObj<typeof IconButtonStatus>;

export const Playground: Story = {
  args: {
    tooltip: 'More info',
  },
};
