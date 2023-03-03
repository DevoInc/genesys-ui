import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button, HFlex, FlexItem } from '..';

const meta: Meta<typeof Button> = {
  title: 'Components/Core/Button/Button/ColorSchemes',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const AccentHigh: Story = {
  args: {
    colorScheme: 'accent-high',
    children: 'Accent high',
  },
};

export const Accent: Story = {
  args: {
    colorScheme: 'accent',
    children: 'Accent',
  },
};

export const Neutral: Story = {
  args: {
    colorScheme: 'neutral',
    children: 'Neutral',
  },
};

export const Blend: Story = {
  render: () => (
    <HFlex spacing="cmp-md">
      <FlexItem flex="1 1 50%">
        <Button colorScheme="blend-base">Blend base</Button>
      </FlexItem>
      <FlexItem flex="1 1 50%">
        <div style={{ backgroundColor: '#222', padding: '2rem' }}>
          <Button colorScheme="blend-inverse">Blend inverse</Button>
        </div>
      </FlexItem>
    </HFlex>
  ),
};

export const UI: Story = {
  render: () => (
    <HFlex spacing="cmp-md">
      <FlexItem>
        <Button colorScheme={'error'}>Error</Button>
      </FlexItem>
      <FlexItem>
        <Button colorScheme={'success'}>Success</Button>
      </FlexItem>
      <FlexItem>
        <Button colorScheme={'warning'}>Warning</Button>
      </FlexItem>
      <FlexItem>
        <Button colorScheme={'help'}>Help</Button>
      </FlexItem>
      <FlexItem>
        <Button colorScheme={'info'}>Info</Button>
      </FlexItem>
    </HFlex>
  ),
};

export const Quiet: Story = {
  args: {
    colorScheme: 'quiet',
    children: 'Quiet',
  },
};
