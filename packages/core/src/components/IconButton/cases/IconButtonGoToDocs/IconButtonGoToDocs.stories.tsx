import { Meta, StoryObj } from '@storybook/react';

import { IconButtonGoToDocs } from './IconButtonGoToDocs';

const meta: Meta<typeof IconButtonGoToDocs> = {
  title: 'Components/Button/IconButtonGoToDocs',
  component: IconButtonGoToDocs,
  args: {
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof IconButtonGoToDocs>;

export const Playground: Story = {
  args: {
    tooltip: 'Go to docs',
  },
};
