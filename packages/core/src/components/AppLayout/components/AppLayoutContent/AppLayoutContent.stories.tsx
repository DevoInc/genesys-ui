import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { AppLayoutContent } from './AppLayoutContent';

const meta: Meta<typeof AppLayoutContent> = {
  title: 'Components/Layout/AppLayout/Components/AppLayoutContent',
  component: AppLayoutContent,
  args: {
    children: 'Main content',
  },
};

export default meta;
type Story = StoryObj<typeof AppLayoutContent>;

export const Playground: Story = {};
