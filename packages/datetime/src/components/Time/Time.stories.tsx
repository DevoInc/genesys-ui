import { Meta, StoryObj } from '@storybook/react';

import { Time } from './Time';

const meta: Meta<typeof Time> = {
  title: 'Components/Datetime/Time',
  component: Time,
};

export default meta;
type Story = StoryObj<typeof Time>;

export const Base: Story = {
  args: {},
};
