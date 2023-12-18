import { Meta, StoryObj } from '@storybook/react';

import { TagsFilter } from './TagsFilter';

const meta: Meta<typeof TagsFilter> = {
  title: 'Components/Table/Filters/TagsFilter',
  component: TagsFilter,
};

export default meta;
type Story = StoryObj<typeof TagsFilter>;

export const Base: Story = {
  args: {
    defaultValue: 'all',
    options: [
      { value: 'all', label: 'All' },
      { value: 'true', label: 'True' },
      { value: 'false', label: 'False' },
    ],
  },
};
