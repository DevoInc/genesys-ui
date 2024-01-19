import { Meta, StoryObj } from '@storybook/react';

import { HFlex, IconButton, InputControl, VFlex } from '..';
import * as React from 'react';

const meta: Meta<typeof InputControl> = {
  title: 'Components/Core/Form/InputControl/Cases',
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
      <InputControl.Container>
        <InputControl.Addon position="left">Addon to left</InputControl.Addon>
        <InputControl.InnerContainer>
          <InputControl.Icon icon="gi-check_thick" />
          <InputControl.Input
            aria-label="story example"
            hasAddonToLeft
            hasAddonToRight
            hasIcon
          />
        </InputControl.InnerContainer>
        <InputControl.Addon position="right">Addon to right</InputControl.Addon>
      </InputControl.Container>
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
          <IconButton icon="gi-search_find_zoom" />
        </HFlex>
      </VFlex>
    ))(),
};

export const WithAddonsAndIcons: Story = {
  name: 'With addons and icon',
  args: {
    addonToLeft: 'Addon to left',
    addonToRight: 'Addon to right',
    icon: 'gi-check_thick',
  },
};
