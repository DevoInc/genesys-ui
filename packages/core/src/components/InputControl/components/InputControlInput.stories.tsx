import { Meta, StoryObj } from '@storybook/react';

import { InputControl } from '../';
import * as React from 'react';

const meta: Meta<typeof InputControl> = {
  title: 'Components/Core/Form/InputControl/subcomponents',
  component: InputControl,
  args: { size: 'md', status: 'base', type: 'text' },
  argTypes: {
    // because the storybook doesn't recognize the WithRequired utility
    'aria-label': {
      type: { required: true } as never,
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputControl>;
export const AsNavigation: Story = {
  render: () => (
    <InputControl.Container>
      <InputControl.Addon position="left">Addon to left</InputControl.Addon>
      <InputControl.InnerContainer>
        <InputControl.Input
          hasAddonToLeft
          hasAddonToRight
          aria-label="story example"
        />
      </InputControl.InnerContainer>
      <InputControl.Addon position="right">Addon to right</InputControl.Addon>
    </InputControl.Container>
  ),
};
