import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ChoiceGroup, IconButton } from '../';

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
          icon="gi-play_full"
          tooltip="Play"
        />
        <IconButton
          selectionScheme="multiple"
          colorScheme="quiet"
          tooltip="Pause"
          icon="gi-pause_full"
        />
        <IconButton
          selectionScheme="multiple"
          colorScheme="quiet"
          icon="gi-arrows_play_shuffle"
          tooltip="Shuffle"
        />
        <IconButton
          selectionScheme="multiple"
          colorScheme="quiet"
          icon="gi-arrows_play_repeat"
          tooltip="Repeat"
        />
      </>
    ),
  },
};
