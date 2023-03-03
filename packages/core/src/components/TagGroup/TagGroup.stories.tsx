import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Tag, TagGroup } from '..';

const meta: Meta<typeof TagGroup> = {
  title: 'Components/Core/Feedback/TagGroup',
  component: TagGroup,
  args: {
    labelPosition: 'left',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof TagGroup>;

export const Base: Story = {
  render: (args) =>
    ((args) => (
      <TagGroup {...args}>
        <Tag text="Category one" />
        <Tag colorScheme="secondary" text="Category two" />
        <Tag colorScheme="data-dusk" text="Category three" />
        <Tag colorScheme="warning" text="Category four" />
      </TagGroup>
    ))(args),
};
