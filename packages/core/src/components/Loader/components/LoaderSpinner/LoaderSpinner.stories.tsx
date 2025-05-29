import { Meta, StoryObj } from '@storybook/react-vite';

import { LoaderSpinner } from './LoaderSpinner';

const meta: Meta<typeof LoaderSpinner> = {
  title: 'Components/Feedback/Loader/Components/LoaderSpinner',
  component: LoaderSpinner,
};

export default meta;
type Story = StoryObj<typeof LoaderSpinner>;

export const Playground: Story = {
  parameters: {
    layout: 'centered',
  },
};
