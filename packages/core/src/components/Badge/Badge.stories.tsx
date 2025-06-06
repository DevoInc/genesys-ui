import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { GICheckThick, GIInfo } from '@devoinc/genesys-icons';
import { Badge } from './Badge';
import { HFlex } from '../HFlex';
import { Button } from '../Button';
import { Wrap } from '../Wrap';

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
  render: (args) =>
    ((props) => (
      <HFlex spacing="cmp-xs">
        <Badge colorScheme="info" {...props} />
        <Badge colorScheme="info" icon={<GICheckThick />} />
        <Badge colorScheme="info" text="9" />
        <Badge colorScheme="info" text="Text for the Badge" />
      </HFlex>
    ))(args),
};

export const Sizes: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      return (
        <HFlex>
          <Badge {...props} size="sm" text="Size sm" />
          <Badge {...props} text="Size md" />
          <Badge {...props} size="lg" text="Size lg" />
        </HFlex>
      );
    })(args),
};

export const ColorSchemes: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      return (
        <Wrap>
          <Badge {...props} colorScheme="primary" />
          <Badge {...props} colorScheme="secondary" />
          <Badge {...props} colorScheme="neutral" />
          <Badge {...props} colorScheme="blend-base" />
          <Badge {...props} colorScheme="blend-inverse" />
          <Badge {...props} colorScheme="success" />
          <Badge {...props} colorScheme="error" />
          <Badge {...props} colorScheme="warning" />
          <Badge {...props} colorScheme="help" />
          <Badge {...props} colorScheme="info" />
          <Badge {...props} colorScheme="data-blue" />
          <Badge {...props} colorScheme="data-bronze" />
          <Badge {...props} colorScheme="data-dusk" />
          <Badge {...props} colorScheme="data-green" />
          <Badge {...props} colorScheme="data-indigo" />
          <Badge {...props} colorScheme="data-magenta" />
          <Badge {...props} colorScheme="data-purple" />
          <Badge {...props} colorScheme="data-red" />
          <Badge {...props} colorScheme="data-sky" />
          <Badge {...props} colorScheme="data-slate" />
          <Badge {...props} colorScheme="data-teal" />

          <Badge {...props} colorScheme="primary" text="Primary" />
          <Badge {...props} colorScheme="secondary" text="Secondary" />
          <Badge {...props} colorScheme="neutral" text="Neutral" />
          <Badge {...props} colorScheme="blend-base" text="Blend base" />
          <Badge {...props} colorScheme="blend-inverse" text="Blend inverse" />
          <Badge {...props} colorScheme="success" text="Success" />
          <Badge {...props} colorScheme="error" text="Error" />
          <Badge {...props} colorScheme="warning" text="Warning" />
          <Badge {...props} colorScheme="help" text="Help" />
          <Badge {...props} colorScheme="info" text="Info" />
          <Badge {...props} colorScheme="data-blue" text="Data blue" />
          <Badge {...props} colorScheme="data-bronze" text="Data bronze" />
          <Badge {...props} colorScheme="data-dusk" text="Data dusk" />
          <Badge {...props} colorScheme="data-green" text="Data green" />
          <Badge {...props} colorScheme="data-indigo" text="Data indigo" />
          <Badge {...props} colorScheme="data-magenta" text="Data magenta" />
          <Badge {...props} colorScheme="data-purple" text="Data purple" />
          <Badge {...props} colorScheme="data-red" text="Data red" />
          <Badge {...props} colorScheme="data-sky" text="Data sky" />
          <Badge {...props} colorScheme="data-slate" text="Data slate" />
          <Badge {...props} colorScheme="data-teal" text="Data teal" />
        </Wrap>
      );
    })(args),
};

export const CustomColor: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      return (
        <HFlex>
          <Badge {...props} colorScheme="lightpink" text="Custom light color" />
          <Badge {...props} colorScheme="darkcyan" text="Custom dark color" />
        </HFlex>
      );
    })(args),
};

export const Custom: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <HFlex spacing="cmp-xs">
        <Badge._Container {...props} style={{ backgroundColor: 'darkblue' }}>
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
    ))(args),
};
