import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { AppMenu } from './';
import { StoryChildren } from './__stories__';

const meta: Meta<typeof AppMenu> = {
  title: 'Components/Navigation/AppMenu',
  component: AppMenu,
  parameters: {
    padding: '0',
    bgMode: 'app',
  },
  args: {
    menuRole: 'nav',
  },
};

export default meta;
type Story = StoryObj<typeof AppMenu>;

export const Playground: Story = {
  args: {
    children: <StoryChildren />,
  },
};
