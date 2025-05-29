import { Meta, StoryObj } from '@storybook/react-vite';

import { TextFilter } from './TextFilter';

const meta: Meta<typeof TextFilter> = {
  title: 'Components/Layout/Table/Filters/TextFilter',
  component: TextFilter,
};

export default meta;
type Story = StoryObj<typeof TextFilter>;

export const Base: Story = {
  args: {},
};
