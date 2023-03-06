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
