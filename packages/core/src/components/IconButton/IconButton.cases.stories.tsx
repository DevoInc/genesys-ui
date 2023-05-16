import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box, SpinnerLoader, IconButton } from '../..';

const meta: Meta<typeof IconButton> = {
  title: 'Components/Core/Button/IconButton/Cases',
  component: IconButton,
  args: {
    colorScheme: 'neutral',
    state: 'enabled',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const WithChildren: Story = {
  name: 'With children',
  args: {
    circular: true,
    icon: 'real_time',
    children: (
      <Box position="absolute" width="100%" height="100%">
        <SpinnerLoader />
      </Box>
    ),
  },
};

export const AsLink: Story = {
  name: 'As link',
  args: {
    href: 'https://www.devo.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    icon: 'connections_links',
  },
};

export const MultipleUncontrolled: Story = {
  name: 'Multiple uncontrolled',
  args: {
    selectionScheme: 'multiple',
    value: 'option',
    icon: 'text_style_bold',
  },
};

export const MultipleControlled: Story = {
  name: 'Multiple controlled',
  args: {
    selectionScheme: 'multiple',
  },
  render: (args) =>
    ((args) => {
      const [selected, setSelected] = React.useState(false);
      return (
        <IconButton
          {...args}
          icon={selected ? 'heart_full' : 'like_heart_favorite_rating_love'}
          onChange={() => setSelected(!selected)}
          state={selected ? 'selected' : 'enabled'}
        />
      );
    })(args),
};

export const SingleUncontrolled: Story = {
  name: 'Single uncontrolled',
  args: {
    selectionScheme: 'single',
    name: 'option',
    value: 'option',
    icon: 'bookmark_tag',
  },
};

export const SingleControlled: Story = {
  name: 'Single controlled',
  args: {
    selectionScheme: 'single',
    value: 'Option',
    name: 'option',
  },
  render: (args) =>
    ((args) => {
      const [selected, setSelected] = React.useState(false);
      return (
        <IconButton
          {...args}
          icon={selected ? 'bookmark_tag_solid' : 'bookmark_tag'}
          onChange={() => setSelected(!selected)}
          state={selected ? 'selected' : 'enabled'}
        />
      );
    })(args),
};
