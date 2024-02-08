import { Meta, StoryObj } from '@storybook/react';

import { IconButtonStop } from '..';

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

export const Base: Story = {};
