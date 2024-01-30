import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ChoiceGroup, IconButton } from '../';

const meta: Meta<typeof ChoiceGroup> = {
  title: 'Components/Core/Form/ChoiceGroup',
  component: ChoiceGroup,
  args: {
    colorScheme: 'quiet',
    hasFloatingHelper: true,
    hasLegendLabelFormat: true,
    legendPosition: 'top',
    selectionScheme: 'multiple',
    size: 'md',
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
        <ChoiceGroup.IconButton icon="gi-play" tooltip="Play" />
        <ChoiceGroup.IconButton tooltip="Pause" icon="gi-pause" />
        <ChoiceGroup.IconButton
          icon="gi-arrows_play_shuffle"
          tooltip="Shuffle"
        />
        <ChoiceGroup.IconButton icon="gi-arrows_play_repeat" tooltip="Repeat" />
      </>
    ),
  },
};

export const SpecificChildProp: Story = {
  tags: ['isHidden'],
  name: 'Specific prop value for a child',
  render: (args) =>
    ((args) => {
      return (
        <ChoiceGroup {...args}>
          <ChoiceGroup.IconButton icon="gi-play" tooltip="Play" />
          <ChoiceGroup.IconButton tooltip="Pause" icon="gi-pause" />
          <ChoiceGroup.IconButton
            icon="gi-arrows_play_shuffle"
            tooltip="Shuffle"
          />
          <ChoiceGroup.IconButton
            icon="gi-arrows_play_repeat"
            tooltip="Repeat"
            colorScheme="neutral"
          />
        </ChoiceGroup>
      );
    })(args),
};

export const UseOfIconButton: Story = {
  tags: ['isHidden'],
  name: 'Using not pre-defined ChoiceGroup components',
  render: (args) =>
    ((args) => {
      return (
        <ChoiceGroup {...args} size="xs">
          <IconButton icon="gi-play" tooltip="Play" />
          <IconButton tooltip="Pause" icon="gi-pause" />
          <IconButton icon="gi-arrows_play_shuffle" tooltip="Shuffle" />
          <IconButton icon="gi-arrows_play_repeat" tooltip="Repeat" />
        </ChoiceGroup>
      );
    })(args),
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
          <ChoiceGroup.IconButton
            icon={
              selectedButtons?.one
                ? 'gi-heart_full'
                : 'gi-like_heart_favorite_rating_love'
            }
            onChange={() => {
              setSelectedButtons({
                ...selectedButtons,
                one: !selectedButtons?.one,
              });
            }}
            state={selectedButtons.one ? 'selected' : 'enabled'}
          />
          <ChoiceGroup.IconButton
            icon={
              selectedButtons.two ? 'gi-bookmark_tag_solid' : 'gi-bookmark_tag'
            }
            onChange={() => {
              setSelectedButtons({
                ...selectedButtons,
                two: !selectedButtons?.two,
              });
            }}
            state={selectedButtons.two ? 'selected' : 'enabled'}
          />
          <ChoiceGroup.IconButton
            icon={selectedButtons.three ? 'gi-pin_bookmark' : 'gi-pin_bookmark'}
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
        <ChoiceGroup.IconButton icon="gi-like_heart_favorite_rating_love" />
        <ChoiceGroup.IconButton icon="gi-bookmark_tag" />
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
          <ChoiceGroup.IconButton
            icon="gi-chart"
            onChange={() => {
              setSelectedButton(1);
            }}
            selectionScheme="single"
            state={selectedButton === 1 ? 'selected' : 'enabled'}
          />
          <ChoiceGroup.IconButton
            icon="gi-chart_agg"
            onChange={() => {
              setSelectedButton(2);
            }}
            selectionScheme="single"
            state={selectedButton === 2 ? 'selected' : 'enabled'}
          />
          <ChoiceGroup.IconButton
            icon="gi-chart_donut"
            onChange={() => {
              setSelectedButton(3);
            }}
            selectionScheme="single"
            state={selectedButton === 3 ? 'selected' : 'enabled'}
          />
          <ChoiceGroup.IconButton
            icon="gi-chart_sankey"
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
        <ChoiceGroup.IconButton
          icon="gi-chart"
          name="uncontrolled"
          selectionScheme="single"
        />
        <ChoiceGroup.IconButton
          icon="gi-chart_agg"
          name="uncontrolled"
          selectionScheme="single"
        />
        <ChoiceGroup.IconButton
          icon="gi-chart_donut"
          name="uncontrolled"
          selectionScheme="single"
        />
        <ChoiceGroup.IconButton
          icon="gi-chart_sankey"
          name="uncontrolled"
          selectionScheme="single"
        />
      </>
    ),
  },
};
