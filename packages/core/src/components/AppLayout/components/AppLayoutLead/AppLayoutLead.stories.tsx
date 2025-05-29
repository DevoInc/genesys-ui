import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { AppLayoutLead } from './AppLayoutLead';

const meta: Meta<typeof AppLayoutLead> = {
  title: 'Components/Layout/AppLayout/Components/AppLayoutLead',
  component: AppLayoutLead,
  args: {
    children: 'Lead content',
  },
};

export default meta;
type Story = StoryObj<typeof AppLayoutLead>;

export const Playground: Story = {};
