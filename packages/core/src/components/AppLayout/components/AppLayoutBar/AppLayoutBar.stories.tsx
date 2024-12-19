import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { AppLayoutBar } from './AppLayoutBar';

const meta: Meta<typeof AppLayoutBar> = {
  title: 'Components/Layout/AppLayout/Components/AppLayoutBar',
  component: AppLayoutBar,
  args: {
    children: 'Bar content',
  },
};

export default meta;
type Story = StoryObj<typeof AppLayoutBar>;

export const Playground: Story = {};
