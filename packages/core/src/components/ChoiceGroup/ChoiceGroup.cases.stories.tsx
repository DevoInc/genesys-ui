import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ChoiceGroup, IconButton } from '..';

const meta: Meta<typeof ChoiceGroup> = {
  title: 'Components/Core/Form/ChoiceGroup/Cases',
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
                ? 'gi-heart_full'
                : 'gi-like_heart_favorite_rating_love'
            }
            onChange={() => {
              setSelectedButtons({
                ...selectedButtons,
                one: !selectedButtons?.one,
              });
            }}
            selectionScheme="multiple"
            state={selectedButtons.one ? 'selected' : 'enabled'}
          />
          <IconButton
            colorScheme="quiet"
            icon={
              selectedButtons.two ? 'gi-bookmark_tag_solid' : 'gi-bookmark_tag'
            }
            onChange={() => {
              setSelectedButtons({
                ...selectedButtons,
                two: !selectedButtons?.two,
              });
            }}
            selectionScheme="multiple"
            state={selectedButtons.two ? 'selected' : 'enabled'}
          />
          <IconButton
            colorScheme="quiet"
            icon={selectedButtons.three ? 'gi-pin_bookmark' : 'gi-pin_bookmark'}
            onChange={() => {
              setSelectedButtons({
                ...selectedButtons,
                three: !selectedButtons?.three,
              });
            }}
            selectionScheme="multiple"
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
          icon="gi-like_heart_favorite_rating_love"
          selectionScheme="multiple"
        />
        <IconButton
          colorScheme="quiet"
          icon="gi-bookmark_tag"
          selectionScheme="multiple"
        />
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
            icon="gi-chart"
            onChange={() => {
              setSelectedButton(1);
            }}
            selectionScheme="single"
            state={selectedButton === 1 ? 'selected' : 'enabled'}
          />
          <IconButton
            colorScheme="quiet"
            icon="gi-chart_agg"
            onChange={() => {
              setSelectedButton(2);
            }}
            selectionScheme="single"
            state={selectedButton === 2 ? 'selected' : 'enabled'}
          />
          <IconButton
            colorScheme="quiet"
            icon="gi-chart_donut"
            onChange={() => {
              setSelectedButton(3);
            }}
            selectionScheme="single"
            state={selectedButton === 3 ? 'selected' : 'enabled'}
          />
          <IconButton
            colorScheme="quiet"
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
        <IconButton
          colorScheme="quiet"
          icon="gi-chart"
          name="uncontrolled"
          selectionScheme="single"
        />
        <IconButton
          colorScheme="quiet"
          icon="gi-chart_agg"
          name="uncontrolled"
          selectionScheme="single"
        />
        <IconButton
          colorScheme="quiet"
          icon="gi-chart_donut"
          name="uncontrolled"
          selectionScheme="single"
        />
        <IconButton
          colorScheme="quiet"
          icon="gi-chart_sankey"
          name="uncontrolled"
          selectionScheme="single"
        />
      </>
    ),
  },
};
