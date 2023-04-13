import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { userOptions } from '../../__stories__/content';
import { ButtonGroup, AppBar } from '../../../';

const meta: Meta<typeof AppBar.Options> = {
  title: 'Components/Core/Navigation/AppBar/Subcomponents',
  component: AppBar.Options,
};

export default meta;
type Story = StoryObj<typeof AppBar.Options>;

export const Options: Story = {
  args: { children: <ButtonGroup size="md">{userOptions}</ButtonGroup> },
};
