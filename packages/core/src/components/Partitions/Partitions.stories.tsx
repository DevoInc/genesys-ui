import { Meta, StoryObj } from '@storybook/react-vite';

import { Partitions } from './Partitions';

const meta: Meta<typeof Partitions> = {
  title: 'Components/Feedback/Partitions',
  component: Partitions,
  args: {
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Partitions>;

export const Playground: Story = {
  args: {
    data: [
      { value: 0.4, color: 'error', tooltip: 'Error: 40%' },
      { value: 0.2, color: 'help', tooltip: 'Help: 20%' },
      { value: 0.2, color: 'warning', tooltip: 'Warning: 20%' },
      { value: 0.1, color: 'success', tooltip: 'Success: 10%' },
      { value: 0.1, color: '#B474DD', tooltip: 'Undefined: 10%' },
    ],
  },
};
