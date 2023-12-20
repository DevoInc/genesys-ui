import { Meta, StoryObj } from '@storybook/react';

import { BooleanFilter } from './BooleanFilter';

const meta: Meta<typeof BooleanFilter> = {
  title: 'Components/Table/Filters/BooleanFilter',
  component: BooleanFilter,
};

export default meta;
type Story = StoryObj<typeof BooleanFilter>;

export const Base: Story = {
  args: {},
};
