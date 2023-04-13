import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { AppBarOptions } from '..';
import { userOptions } from '../../__stories__/content';
import { ButtonGroup } from '../../../ButtonGroup';

const meta: Meta<typeof AppBarOptions> = {
  title: 'Components/Core/Navigation/AppBar/Subcomponents',
  component: AppBarOptions,
};

export default meta;
type Story = StoryObj<typeof AppBarOptions>;

export const Options: Story = {
  args: { children: <ButtonGroup size="md">{userOptions}</ButtonGroup> },
};
