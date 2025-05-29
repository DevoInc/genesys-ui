import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Badge } from './Badge';
import { HFlex } from '../HFlex';
import { Button } from '../Button';
import { GICheckThick, GIInfo } from '@devoinc/genesys-icons';

const meta: Meta<typeof Badge> = {
  title: 'Components/Feedback/Badge',
  component: Badge,
  args: {
    size: 'md',
    colorScheme: 'neutral',
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Playground: Story = {};

export const InOtherComponents: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => (
      <Button hasBadge badgeText="12">
        Button with badge
      </Button>
    ))(),
};

export const ContentSchemes: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => (
      <HFlex spacing="cmp-xs">
        <Badge colorScheme="info" />
        <Badge colorScheme="info" icon={<GICheckThick />} />
        <Badge colorScheme="info" text="9" />
        <Badge colorScheme="info" text="Text for the Badge" />
      </HFlex>
    ))(),
};

export const Custom: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => (
      <HFlex spacing="cmp-xs">
        <Badge._Container style={{ backgroundColor: 'darkblue' }}>
          <Badge._Text color="white" style={{ fontStyle: 'italic' }}>
            Custom
          </Badge._Text>
        </Badge._Container>
        <Badge._Container style={{ backgroundColor: 'skyblue' }}>
          <Badge._Icon color="midnightblue" size="2rem">
            <GIInfo />
          </Badge._Icon>
        </Badge._Container>
      </HFlex>
    ))(),
};
