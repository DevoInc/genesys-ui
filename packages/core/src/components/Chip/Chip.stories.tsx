import { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import {
  GICheckThick,
  GIExitClose,
  GIHeartFull,
  GILikeHeartFavoriteRatingLove,
} from '@devoinc/genesys-icons';

import { Button, Chip, HFlex } from '..';

const meta: Meta<typeof Chip> = {
  title: 'Components/Form/Chip',
  component: Chip,
  args: {
    children: 'Favorite',
    icon: <GILikeHeartFavoriteRatingLove />,
    iconSelected: <GIHeartFull />,
    selectionScheme: 'multiple',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Playground: Story = {};

export const MultipleControlled: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      const [selected, setSelected] = React.useState(false);
      return (
        <Chip
          {...props}
          icon={<GILikeHeartFavoriteRatingLove />}
          iconSelected={<GIHeartFull />}
          onChange={() => setSelected(!selected)}
          state={selected ? 'selected' : props.state}
          value="favorite"
        >
          Favorite
        </Chip>
      );
    })(args),
};

export const MultipleUncontrolled: Story = {
  tags: ['isHidden'],
  args: {
    icon: <GILikeHeartFavoriteRatingLove />,
    children: 'Favorite',
  },
};

export const Readonly: Story = {
  tags: ['isHidden'],
  args: {
    children: 'Cat: domain',
    icon: undefined,
    iconSelected: undefined,
    selectionScheme: undefined,
    state: 'readonly',
  },
};

export const Removable: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      const [removed, setRemoved] = React.useState(false);
      return (
        <HFlex>
          {!removed && (
            <Chip
              removable
              onRemove={() => setRemoved(true)}
              selectionScheme="single"
              state="readonly"
            >
              Favorite
            </Chip>
          )}
          <Button
            icon={removed ? <GICheckThick /> : <GIExitClose />}
            colorScheme="quiet"
            onClick={() => setRemoved(!removed)}
          >
            {removed ? 'Apply filter' : 'Clear all'}
          </Button>
        </HFlex>
      );
    })(),
};

export const SingleControlled: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      const [selected, setSelected] = React.useState(false);
      return (
        <Chip
          {...props}
          icon={<GILikeHeartFavoriteRatingLove />}
          iconSelected={<GIHeartFull />}
          name="single"
          onChange={() => setSelected(!selected)}
          selectionScheme="single"
          state={selected ? 'selected' : props.state}
        >
          Favorite
        </Chip>
      );
    })(args),
};

export const SingleUncontrolled: Story = {
  tags: ['isHidden'],
  args: {
    icon: <GILikeHeartFavoriteRatingLove />,
    children: 'Favorite',
    selectionScheme: 'single',
    name: 'single',
  },
};

export const Custom: Story = {
  tags: ['isHidden'],
  name: 'Custom based in internal components',
  render: (args) =>
    ((props) => {
      const [selected, setSelected] = React.useState(false);
      return (
        <Chip._Container {...props} state={selected ? 'selected' : props.state}>
          <Chip._HiddenInput
            onChange={() => setSelected(!selected)}
            selectionScheme="multiple"
            state={selected ? 'selected' : 'enabled'}
          />
          <Chip._Icon size="2rem">
            {selected ? <GIHeartFull /> : <GILikeHeartFavoriteRatingLove />}
          </Chip._Icon>
          <Chip._Content style="font-style: italic;">Favorite</Chip._Content>
        </Chip._Container>
      );
    })(args),
};
