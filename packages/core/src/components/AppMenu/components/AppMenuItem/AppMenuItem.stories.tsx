import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { GISettingsGearPreferences, GITimeZone } from '@devoinc/genesys-icons';

import { AppMenu } from '../../AppMenu';
import { Box } from '../../../Box';

const meta: Meta<typeof AppMenu.Item> = {
  title: 'Components/Navigation/AppMenu/Components/AppMenuItem',
  component: AppMenu.Item,
  args: {
    label: 'AppMenu item content',
    icon: <GITimeZone />,
    state: 'enabled',
    collapsed: false,
  },
};

export default meta;
type Story = StoryObj<typeof AppMenu.Item>;

export const Playground: Story = {};

export const Expandable: Story = {
  tags: ['isHidden'],
  args: {
    expandable: true,
  },
};

export const IsBeta: Story = {
  tags: ['isHidden'],
  args: {
    isBeta: true,
  },
};

export const WithCounter: Story = {
  tags: ['isHidden'],
  args: {
    counter: '+99',
  },
};

export const Active: Story = {
  tags: ['isHidden'],
  args: {
    state: 'active',
  },
};

export const Tooltip: Story = {
  tags: ['isHidden'],
  args: {
    label: 'Preferences',
    icon: <GISettingsGearPreferences />,
    collapsed: true,
    tooltip: 'Preferences',
  },
  render: (args) =>
    ((props) => {
      return (
        <Box width="7.2rem">
          <AppMenu.Item {...props} />
        </Box>
      );
    })(args),
};
