import { Meta, StoryObj } from '@storybook/react-vite';

import { IconButtonStop } from './IconButtonStop';

const meta: Meta<typeof IconButtonStop> = {
  title: 'Components/Button/IconButtonStop',
  component: IconButtonStop,
  args: {
    state: 'enabled',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof IconButtonStop>;

export const Playground: Story = {
  args: {
    tooltip: 'Stop the process',
  },
};
