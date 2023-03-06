import { Meta, StoryObj } from '@storybook/react';

import { AppBar } from './AppBar';
import { mainActions, customBlock, userOptions } from './__stories__/content';

const meta: Meta<typeof AppBar> = {
  title: 'Components/Core/Navigation/AppBar/Cases',
  component: AppBar,
};

export default meta;
type Story = StoryObj<typeof AppBar>;

export const CustomContent: Story = {
  args: {
    customContent: customBlock,
    mainActions,
    userOptions,
  },
};
