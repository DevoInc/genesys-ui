import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Link } from './Link';
import { Typography } from '../';

const meta: Meta<typeof Link> = {
  title: 'Components/Core/Navigation/Link',
  component: Link,
  args: {
    colorScheme: 'base',
    size: 'md',
    state: 'enabled',
    children: 'This is a link',
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Base: Story = {
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
