import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { AppBar } from './AppBar';
import { mainActions, userOptions, tabs } from './__stories__/content';

const meta: Meta<typeof AppBar> = {
  title: 'Components/Core/Navigation/AppBar/Cases',
  component: AppBar,
  subcomponents: {
    'AppBar.Heading': AppBar.Heading,
    'AppBar.Container': AppBar.Container,
    'AppBar.Navigation': AppBar.Navigation,
    'AppBar.Actions': AppBar.Actions,
    'AppBar.Options': AppBar.Options,
    'AppBar.Divider': AppBar.Divider,
  },
};

export default meta;
type Story = StoryObj<typeof AppBar>;

export const WithHeadingAndActions: Story = {
  args: { tabItems: tabs, heading: 'App', actions: mainActions },
};

export const WithOptions: Story = {
  args: { tabItems: tabs, options: userOptions },
};

export const Custom: Story = {
  render: () =>
    (() => {
      const id = 'custom';
      return (
        <AppBar.Container>
          <AppBar.Heading id={id}>Hola</AppBar.Heading>
          <AppBar.Navigation id={id}>Custom navigation</AppBar.Navigation>
          <AppBar.Actions id={id}>Custom actions</AppBar.Actions>
        </AppBar.Container>
      );
    })(),
};
