import { Meta, StoryObj } from '@storybook/react-vite';

import { LoaderProgressBar } from './LoaderProgressBar';

const meta: Meta<typeof LoaderProgressBar> = {
  title: 'Components/Feedback/Loader/Components/LoaderProgressBar',
  component: LoaderProgressBar,
  args: {
    percent: 34,
    status: 'progressing',
  },
};

export default meta;
type Story = StoryObj<typeof LoaderProgressBar>;

export const Playground: Story = {
  parameters: {
    layout: 'centered',
  },
};
