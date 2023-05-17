import { Meta, StoryObj } from '@storybook/react';

import { InputControl } from '..';
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
  render: () =>
    (() => (
      <InputControl.Container>
        <InputControl.Addon position="left">Addon to left</InputControl.Addon>
        <InputControl.InnerContainer>
          <InputControl.Icon icon="check_thick" />
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

export const WithAddonsAndIcons: Story = {
  name: 'With addons and icon',
  args: {
    addonToLeft: 'Addon to left',
    addonToRight: 'Addon to right',
    icon: 'gi-check_thick',
  },
};
