import { Meta, StoryObj } from '@storybook/react';

import { AppBar } from './AppBar';
import {
  mainActions,
  tabs,
  customBlock,
  userOptions,
} from './__stories__/content';

const meta: Meta<typeof AppBar> = {
  title: 'Components/Core/Navigation/AppBar',
  component: AppBar,
};

export default meta;
type Story = StoryObj<typeof AppBar>;

export const StraightContent: Story = {
  args: {
    mainActions,
    tabs,
  },
};

export const CustomContent: Story = {
  args: {
    customContent: customBlock,
    mainActions,
    userOptions,
  },
};
