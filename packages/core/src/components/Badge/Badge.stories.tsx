import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';
import { HFlex } from '../HFlex';
import { Button } from '../Button';

const meta: Meta<typeof Badge> = {
  title: 'Components/Core/Feedback/Badge',
  component: Badge,
  args: {
    size: 'md',
    colorScheme: 'neutral',
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Base: Story = {};

export const InOtherComponents: Story = {
  name: 'As part of other component',
  render: () =>
    (() => (
      <Button hasBadge badgeText="12">
        Button with badge
      </Button>
    ))(),
};

export const ContentSchemes: Story = {
  name: 'Content schemes',
  render: () =>
    (() => (
      <HFlex spacing="cmp-xs">
        <Badge colorScheme="info" />
        <Badge colorScheme="info" icon="gi-check_thick" />
        <Badge colorScheme="info" text="9" />
        <Badge colorScheme="info" text="Text for the Badge" />
      </HFlex>
    ))(),
};

export const Custom: Story = {
  render: () =>
    (() => (
      <HFlex spacing="cmp-xs">
        <Badge._Container styles="background-color: darkblue">
          <Badge._Text color="white" styles="font-style: italic;">
            Custom
          </Badge._Text>
        </Badge._Container>
        <Badge._Container styles="background-color: skyblue">
          <Badge._Icon iconId="gi-info" color="midnightblue" size="2rem" />
        </Badge._Container>
      </HFlex>
    ))(),
};
