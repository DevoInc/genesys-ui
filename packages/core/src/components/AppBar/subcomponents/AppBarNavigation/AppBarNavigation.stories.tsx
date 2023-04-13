import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { AppBarNavigation } from '..';
import { tabs } from '../../__stories__/content';
import { Tabs } from '../../../Tabs';

const meta: Meta<typeof AppBarNavigation> = {
  title: 'Components/Core/Navigation/AppBar/Subcomponents',
  component: AppBarNavigation,
};

export default meta;
type Story = StoryObj<typeof AppBarNavigation>;

export const Navigation: Story = {
  args: {
    children: (
      <Tabs aria-label="main-nav" colorScheme="primary" contained={false}>
        {React.Children.map(tabs, (tab) => React.cloneElement(tab))}
      </Tabs>
    ),
  },
};
