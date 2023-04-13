import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { tabs } from '../../__stories__/content';
import { Tabs, AppBar } from '../../../';

const meta: Meta<typeof AppBar.Navigation> = {
  title: 'Components/Core/Navigation/AppBar/Subcomponents',
  component: AppBar.Navigation,
};

export default meta;
type Story = StoryObj<typeof AppBar.Navigation>;

export const Navigation: Story = {
  args: {
    children: (
      <Tabs aria-label="main-nav" colorScheme="primary" contained={false}>
        {React.Children.map(tabs, (tab) => React.cloneElement(tab))}
      </Tabs>
    ),
  },
};
