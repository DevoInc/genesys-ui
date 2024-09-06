import { Meta, StoryObj } from '@storybook/react';

import { MonthSelector } from './MonthSelector';

const meta: Meta<typeof MonthSelector> = {
  title: 'Components/Datetime/MonthSelector',
  component: MonthSelector,
};

export default meta;
type Story = StoryObj<typeof MonthSelector>;

export const Base: Story = {
  args: {},
};
