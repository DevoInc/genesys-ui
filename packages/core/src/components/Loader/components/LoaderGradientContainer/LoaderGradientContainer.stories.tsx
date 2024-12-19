import { Meta, StoryObj } from '@storybook/react';

import { LoaderGradientContainer } from './LoaderGradientContainer';

const meta: Meta<typeof LoaderGradientContainer> = {
  title: 'Components/Feedback/Loader/Components/LoaderGradientContainer',
  component: LoaderGradientContainer,
};

export default meta;
type Story = StoryObj<typeof LoaderGradientContainer>;

export const Playground: Story = {
  parameters: {
    layout: 'centered',
  },
};
