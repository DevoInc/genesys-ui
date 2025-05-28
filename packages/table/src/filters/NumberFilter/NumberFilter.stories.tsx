import { Meta, StoryObj } from '@storybook/react-vite';

import { NumberFilter } from './NumberFilter';

const meta: Meta<typeof NumberFilter> = {
  title: 'Components/Layout/Table/Filters/NumberFilter',
  component: NumberFilter,
};

export default meta;
type Story = StoryObj<typeof NumberFilter>;

export const Base: Story = {
  args: {},
};
