import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { TagGroup } from './TagGroup';
import { Tag } from '../Tag';

const meta: Meta<typeof TagGroup> = {
  title: 'Components/Feedback/TagGroup',
  component: TagGroup,
  args: {
    labelPosition: 'left',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof TagGroup>;

export const Playground: Story = {
  render: (args) =>
    ((args) => (
      <TagGroup {...args}>
        <TagGroup.Tag text="Category one" />
        <TagGroup.Tag colorScheme="secondary" text="Category two" />
        <TagGroup.Tag colorScheme="data-dusk" text="Category three" />
        <TagGroup.Tag colorScheme="warning" text="Category four" />
      </TagGroup>
    ))(args),
};

export const AsLegend: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((args) => (
      <TagGroup {...args} quiet>
        <TagGroup.Tag text="New alerts" colorScheme="success" />
        <TagGroup.Tag text="Warning alerts" colorScheme="warning" />
        <TagGroup.Tag text="Error alerts" colorScheme="error" />
        <TagGroup.Tag text="Not defined alerts" colorScheme="data-blue" />
      </TagGroup>
    ))(args),
};

export const UseOfTag: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((args) => (
      <TagGroup {...args} colorScheme="error">
        <Tag text="New alerts" />
        <Tag text="Warning alerts" />
        <Tag text="Error alerts" />
        <Tag text="Not defined alerts" />
      </TagGroup>
    ))(args),
};

export const WithLabel: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((args) => (
      <TagGroup {...args} label="This is a label">
        <TagGroup.Tag text="New alerts" colorScheme="success" />
        <TagGroup.Tag text="Warning alerts" colorScheme="warning" />
        <TagGroup.Tag text="Error alerts" colorScheme="error" />
        <TagGroup.Tag text="Not defined alerts" colorScheme="data-blue" />
      </TagGroup>
    ))(args),
};
