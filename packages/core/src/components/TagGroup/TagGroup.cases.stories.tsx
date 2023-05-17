import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Tag, TagGroup } from '..';

const meta: Meta<typeof TagGroup> = {
  title: 'Components/Core/Feedback/TagGroup/Cases',
  component: TagGroup,
};

export default meta;
type Story = StoryObj<typeof TagGroup>;

export const AsLegend: Story = {
  name: 'As legend',
  render: () =>
    (() => (
      <TagGroup>
        <Tag text="New alerts" colorScheme="success" quiet />
        <Tag text="Warning alerts" colorScheme="warning" quiet />
        <Tag text="Error alerts" colorScheme="error" quiet />
        <Tag text="Not defined alerts" colorScheme="data-blue" quiet />
      </TagGroup>
    ))(),
};
