import { Meta, StoryObj } from '@storybook/react';

import { Divider } from '../';

const meta: Meta<typeof Divider> = {
  title: 'Components/Core/Layout/Divider',
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Base: Story = {};
