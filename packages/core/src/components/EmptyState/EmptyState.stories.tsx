import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { EmptyState } from './EmptyState';
import { Button } from '../Button';
import { VFlex } from '../VFlex';

const meta: Meta<typeof EmptyState> = {
  title: 'Components/Feedback/EmptyState',
  component: EmptyState,
  args: {
    format: 'text',
    primaryText: 'No data available',
  },
};

const actions = <Button colorScheme="accent">Create a new one</Button>;

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Playground: Story = {};

export const TextFormat: Story = {
  tags: ['isHidden'],
  args: {
    secondaryText:
      'Great turbulent clouds muse about a mote of dust suspended.',
  },
};

export const IconFormat: Story = {
  tags: ['isHidden'],
  args: {
    format: 'icon',
    secondaryText:
      'Great turbulent clouds muse about a mote of dust suspended.',
  },
};

export const FeaturedFormat: Story = {
  tags: ['isHidden'],
  args: {
    format: 'featured',
    secondaryText:
      "Great turbulent clouds muse about a mote of dust suspended in a sunbeam dream of the mind's eye prime number preserve and cherish that pale blue dot.",
  },
};

export const WithActions: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <VFlex spacing="cmp-xl">
        <EmptyState {...props} actions={actions} />
        <EmptyState
          {...props}
          format="icon"
          secondaryText="Great turbulent clouds muse about a mote of dust suspended."
          actions={actions}
        />
        <EmptyState
          {...props}
          format="featured"
          secondaryText="Great turbulent clouds muse about a mote of dust suspended in a sunbeam dream of the mind's eye prime number preserve and cherish that pale blue dot."
          actions={actions}
        />
      </VFlex>
    ))(args),
};
