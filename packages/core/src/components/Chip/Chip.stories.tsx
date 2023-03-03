import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Chip } from '..';

const meta: Meta<typeof Chip> = {
  title: 'Components/Core/Form/Chip',
  component: Chip,
  args: {
    children: 'Favorite',
    icon: 'like_heart_favorite_rating_love',
    iconSelected: 'heart_full',
    selectionScheme: 'multiple',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Base: Story = {};

export const MultipleControlled: Story = {
  render: () =>
    (() => {
      const [selected, setSelected] = React.useState(false);
      return (
        <Chip
          icon="like_heart_favorite_rating_love"
          iconSelected="heart_full"
          onChange={() => setSelected(!selected)}
          state={selected ? 'selected' : 'enabled'}
          value="favorite"
        >
          Favorite
        </Chip>
      );
    })(),
};

export const MultipleUncontrolled: Story = {
  args: {
    icon: 'like_heart_favorite_rating_love',
    children: 'Favorite',
  },
};

export const SingleControlled: Story = {
  render: () =>
    (() => {
      const [selected, setSelected] = React.useState(false);
      return (
        <Chip
          icon="like_heart_favorite_rating_love"
          iconSelected="heart_full"
          name="single"
          onChange={() => setSelected(!selected)}
          selectionScheme="single"
          state={selected ? 'selected' : 'enabled'}
        >
          Favorite
        </Chip>
      );
    })(),
};

export const SingleUncontrolled: Story = {
  args: {
    icon: 'like_heart_favorite_rating_love',
    children: 'Favorite',
    selectionScheme: 'single',
    name: 'single',
  },
};
