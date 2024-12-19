import { Meta, StoryObj } from '@storybook/react';

import { LoaderDevoLogoSpinner } from './LoaderDevoLogoSpinner';

const meta: Meta<typeof LoaderDevoLogoSpinner> = {
  title: 'Components/Feedback/Loader/Components/LoaderDevoLogoSpinner',
  component: LoaderDevoLogoSpinner,
  args: {},
};

export default meta;
type Story = StoryObj<typeof LoaderDevoLogoSpinner>;

export const Playground: Story = {
  parameters: {
    layout: 'centered',
  },
};
