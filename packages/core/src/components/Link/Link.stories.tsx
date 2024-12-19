import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Link } from './Link';
import { Typography } from '../Typography';
import { VFlex } from '../VFlex';

const meta: Meta<typeof Link> = {
  title: 'Components/Navigation/Link',
  component: Link,
  args: {
    colorScheme: 'base',
    size: 'md',
    state: 'enabled',
    href: 'https://www.google.com',
    target: '_blank',
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Playground: Story = {
  render: (args) => (
    <Typography.Paragraph>
      Star stuff harvesting <Link {...args}>star light muse</Link> about
      extraordinary claims require extraordinary evidence hydrogen atoms
      astonishment Hypatia. Descended from astronomers dream of the mind&apos;s
      eye cosmic fugue something incredible is waiting to be known rings of
      Uranus inconspicuous motes of rock and gas.
    </Typography.Paragraph>
  ),
};

export const Status: Story = {
  tags: ['isHidden'],
  args: {
    wide: true,
  },
  render: (args) => (
    <VFlex spacing="cmp-sm">
      <Link {...args}>Link with base color scheme</Link>
      <Link {...args} colorScheme="error">
        Link with error color scheme
      </Link>
      <Link {...args} colorScheme="success">
        Link with success color scheme
      </Link>
      <Link {...args} colorScheme="warning">
        Link with warning color scheme
      </Link>
      <Link {...args} colorScheme="info">
        Link with info color scheme
      </Link>
      <Link {...args} colorScheme="help">
        Link with help color scheme
      </Link>
    </VFlex>
  ),
};
export const Block: Story = {
  tags: ['isHidden'],
  args: {
    wide: true,
  },
  render: (args) => (
    <Typography.Paragraph>
      Star stuff harvesting <Link {...args}>star light muse</Link> about
      extraordinary claims require extraordinary evidence hydrogen atoms
      astonishment Hypatia. Descended from astronomers dream of the mind&apos;s
      eye cosmic fugue something incredible is waiting to be known rings of
      Uranus inconspicuous motes of rock and gas.
    </Typography.Paragraph>
  ),
};

export const Underlined: Story = {
  tags: ['isHidden'],
  render: (args) => (
    <Typography.Paragraph>
      Star stuff harvesting{' '}
      <Link {...args} underlined>
        star light muse
      </Link>{' '}
      about extraordinary claims require extraordinary evidence hydrogen atoms
      astonishment Hypatia. Descended from astronomers dream of the mind&apos;s
      eye cosmic fugue something incredible is waiting to be known rings of
      Uranus inconspicuous motes of rock and gas.
    </Typography.Paragraph>
  ),
};
