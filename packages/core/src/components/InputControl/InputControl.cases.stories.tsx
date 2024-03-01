import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { GICheckThick, GISearchFindZoom } from '@devoinc/genesys-icons';

import { HFlex, IconButton, InputControl, VFlex } from '..';

const meta: Meta<typeof InputControl> = {
  title: 'Components/Form/InputControl/Cases',
  component: InputControl,
  args: { size: 'md', status: 'base', type: 'text' },
  argTypes: {
    addonToLeft: { control: { type: 'text' } },
    addonToRight: { control: { type: 'text' } },
    // because the storybook doesn't recognize the WithRequired utility
    'aria-label': {
      type: { required: true } as never,
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputControl>;

export const AdvancedUsage: Story = {
  name: 'Advanced usage',
  render: () =>
    (() => (
      <InputControl._Container>
        <InputControl._Addon position="left" styles="background-color: orange">
          Addon to left
        </InputControl._Addon>
        <InputControl._InnerContainer>
          <InputControl._Icon icon={<GICheckThick />} styles="color: purple;" />
          <InputControl._Input
            aria-label="story example"
            hasAddonToLeft
            hasAddonToRight
            hasIcon
          />
        </InputControl._InnerContainer>
        <InputControl._Addon
          position="right"
          styles="background-color: darkblue; color: white;"
        >
          Addon to right
        </InputControl._Addon>
      </InputControl._Container>
    ))(),
};

export const SearchType: Story = {
  name: 'Type search',
  render: () =>
    (() => (
      <VFlex>
        <InputControl
          aria-label="With type icon"
          placeholder="With type icon"
          type="search"
        />
        <HFlex spacing="cmp-xxs">
          <InputControl
            aria-label="Without type icon"
            hideTypeIcon
            placeholder="Without type icon"
            type="search"
          />
          <IconButton icon={<GISearchFindZoom />} />
        </HFlex>
      </VFlex>
    ))(),
};

export const WithAddonsAndIcons: Story = {
  name: 'With addons and icon',
  args: {
    addonToLeft: 'Addon to left',
    addonToRight: 'Addon to right',
    icon: <GICheckThick />,
  },
};
