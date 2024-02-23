import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box } from '../Box';
import { SpinnerLoader } from '../SpinnerLoader';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Components/Button/IconButton/Cases',
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
    icon: 'gi-real_time',
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
    icon: 'gi-connections_links',
  },
};

export const WithDropdown: Story = {
  name: 'With dropdown',
  render: () =>
    (() => {
      const [expanded, setExpanded] = React.useState(false);
      return (
        <IconButton
          state={expanded ? 'expanded' : 'enabled'}
          onClick={() => setExpanded(!expanded)}
          icon="gi-time_edit"
          hasDropdown
        />
      );
    })(),
};

export const Custom: Story = {
  name: 'Custom based in internal components',
  render: () =>
    (() => {
      const [expanded, setExpanded] = React.useState(false);
      return (
        <IconButton._Container
          state={expanded ? 'expanded' : 'enabled'}
          onClick={() => setExpanded(!expanded)}
          styles="height: 4.8rem; width: 4.8rem;"
        >
          <IconButton._Icon icon="gi-folder" styles="font-size: 2.8rem;" />
        </IconButton._Container>
      );
    })(),
};

export const MultipleUncontrolled: Story = {
  name: 'Multiple uncontrolled',
  args: {
    selectionScheme: 'multiple',
    value: 'option',
    icon: 'gi-text_style_bold',
  },
};

export const MultipleControlled: Story = {
  name: 'Multiple controlled',
  args: {
    selectionScheme: 'multiple',
  },
  render: (args) =>
    ((props) => {
      const [selected, setSelected] = React.useState(false);
      return (
        <IconButton
          {...props}
          icon={
            selected ? 'gi-heart_full' : 'gi-like_heart_favorite_rating_love'
          }
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
    icon: 'gi-bookmark_tag',
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
    ((props) => {
      const [selected, setSelected] = React.useState(false);
      return (
        <IconButton
          {...props}
          icon={selected ? 'gi-bookmark_tag_solid' : 'gi-bookmark_tag'}
          onChange={() => setSelected(!selected)}
          state={selected ? 'selected' : 'enabled'}
        />
      );
    })(args),
};
