import { Meta, StoryObj } from '@storybook/react';

import { Chip } from '..';
import * as React from 'react';

const meta: Meta<typeof Chip> = {
  title: 'Components/Form/Chip',
  component: Chip,
  args: {
    children: 'Favorite',
    icon: 'gi-like_heart_favorite_rating_love',
    iconSelected: 'gi-heart_full',
    selectionScheme: 'multiple',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Base: Story = {};

export const MultipleControlled: Story = {
  render: (args) =>
    ((args) => {
      const [selected, setSelected] = React.useState(false);
      return (
        <Chip
          {...args}
          icon="gi-like_heart_favorite_rating_love"
          iconSelected="gi-heart_full"
          onChange={() => setSelected(!selected)}
          state={selected ? 'selected' : 'enabled'}
          value="favorite"
        >
          Favorite
        </Chip>
      );
    })(args),
};

export const MultipleUncontrolled: Story = {
  args: {
    icon: 'gi-like_heart_favorite_rating_love',
    children: 'Favorite',
  },
};

export const SingleControlled: Story = {
  render: (args) =>
    ((args) => {
      const [selected, setSelected] = React.useState(false);
      return (
        <Chip
          {...args}
          icon="gi-like_heart_favorite_rating_love"
          iconSelected="gi-heart_full"
          name="single"
          onChange={() => setSelected(!selected)}
          selectionScheme="single"
          state={selected ? 'selected' : 'enabled'}
        >
          Favorite
        </Chip>
      );
    })(args),
};

export const SingleUncontrolled: Story = {
  args: {
    icon: 'gi-like_heart_favorite_rating_love',
    children: 'Favorite',
    selectionScheme: 'single',
    name: 'single',
  },
};

export const Custom: Story = {
  name: 'Custom based in internal components',
  render: (args) =>
    ((args) => {
      const [selected, setSelected] = React.useState(false);
      return (
        <Chip._Container {...args} state={selected ? 'selected' : 'enabled'}>
          <Chip._HiddenInput
            onChange={() => setSelected(!selected)}
            selectionScheme="multiple"
            state={selected ? 'selected' : 'enabled'}
          />
          <Chip._Icon
            iconId={
              selected ? 'gi-heart_full' : 'gi-like_heart_favorite_rating_love'
            }
            styles="font-size: 2rem;"
          />
          <Chip._Content styles="font-style: italic;">Favorite</Chip._Content>
        </Chip._Container>
      );
    })(args),
};
