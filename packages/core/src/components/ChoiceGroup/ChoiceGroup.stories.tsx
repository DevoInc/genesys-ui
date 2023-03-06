import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ChoiceGroup, IconButton, Divider, HFlex } from '../';

const meta: Meta<typeof ChoiceGroup> = {
  title: 'Components/Core/Form/ChoiceGroup',
  component: ChoiceGroup,
  args: {
    hasLegendLabelFormat: true,
    legendPosition: 'top',
    status: 'base',
  },
  argTypes: {
    helper: {
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ChoiceGroup>;

export const Base: Story = {
  args: {
    children: (
      <>
        <IconButton
          selectionScheme="multiple"
          colorScheme="quiet"
          icon="play_full"
          title="Play"
        />
        <IconButton
          selectionScheme="multiple"
          colorScheme="quiet"
          title="Pause"
          icon="pause_full"
        />
        <IconButton
          selectionScheme="multiple"
          colorScheme="quiet"
          icon="arrows_play_shuffle"
          title="Shuffle"
        />
        <IconButton
          selectionScheme="multiple"
          colorScheme="quiet"
          icon="arrows_play_repeat"
          title="Repeat"
        />
      </>
    ),
  },
};

export const MultipleSelectionControlled: Story = {
  render: () =>
    (() => {
      const [selectedButtons, setSelectedButtons] = React.useState({
        one: null,
        two: null,
        three: null,
      });
      return (
        <ChoiceGroup>
          <IconButton
            colorScheme="quiet"
            icon={
              selectedButtons?.one
                ? 'heart_full'
                : 'like_heart_favorite_rating_love'
            }
            onChange={() => {
              setSelectedButtons({
                ...selectedButtons,
                one: !selectedButtons?.one,
              });
            }}
            state={selectedButtons.one ? 'selected' : 'enabled'}
          />
          <IconButton
            colorScheme="quiet"
            icon={selectedButtons.two ? 'bookmark_tag_solid' : 'bookmark_tag'}
            onChange={() => {
              setSelectedButtons({
                ...selectedButtons,
                two: !selectedButtons?.two,
              });
            }}
            state={selectedButtons.two ? 'selected' : 'enabled'}
          />
          <IconButton
            colorScheme="quiet"
            icon={selectedButtons.three ? 'pin_bookmark_solid' : 'pin_bookmark'}
            onChange={() => {
              setSelectedButtons({
                ...selectedButtons,
                three: !selectedButtons?.three,
              });
            }}
            state={selectedButtons.three ? 'selected' : 'enabled'}
          />
        </ChoiceGroup>
      );
    })(),
};

export const MultipleSelectionUncontrolled: Story = {
  args: {
    children: (
      <>
        <IconButton
          colorScheme="quiet"
          icon="like_heart_favorite_rating_love"
        />
        <IconButton colorScheme="quiet" icon="bookmark_tag" />
      </>
    ),
  },
};

export const SingleSelectionControlled: Story = {
  render: () =>
    (() => {
      const [selectedButton, setSelectedButton] = React.useState(0);
      return (
        <ChoiceGroup>
          <IconButton
            colorScheme="quiet"
            icon="chart"
            onChange={() => {
              setSelectedButton(1);
            }}
            selectionScheme="single"
            state={selectedButton === 1 ? 'selected' : 'enabled'}
          />
          <IconButton
            colorScheme="quiet"
            icon="chart_agg"
            onChange={() => {
              setSelectedButton(2);
            }}
            selectionScheme="single"
            state={selectedButton === 2 ? 'selected' : 'enabled'}
          />
          <IconButton
            colorScheme="quiet"
            icon="chart_donut"
            onChange={() => {
              setSelectedButton(3);
            }}
            selectionScheme="single"
            state={selectedButton === 3 ? 'selected' : 'enabled'}
          />
          <IconButton
            colorScheme="quiet"
            icon="chart_sankey"
            onChange={() => {
              setSelectedButton(4);
            }}
            selectionScheme="single"
            state={selectedButton === 4 ? 'selected' : 'enabled'}
          />
        </ChoiceGroup>
      );
    })(),
};

export const SingleSelectionUncontrolled: Story = {
  args: {
    children: (
      <>
        <IconButton
          colorScheme="quiet"
          icon="chart"
          name="uncontrolled"
          selectionScheme="single"
        />
        <IconButton
          colorScheme="quiet"
          icon="chart_agg"
          name="uncontrolled"
          selectionScheme="single"
        />
        <IconButton
          colorScheme="quiet"
          icon="chart_donut"
          name="uncontrolled"
          selectionScheme="single"
        />
        <IconButton
          colorScheme="quiet"
          icon="chart_sankey"
          name="uncontrolled"
          selectionScheme="single"
        />
      </>
    ),
  },
};
