import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { AppBar, ButtonGroup } from '../../../';
import { mainActions } from '../../__stories__/content';

const meta: Meta<typeof AppBar.Actions> = {
  title: 'Components/Core/Navigation/AppBar/Subcomponents',
  component: AppBar.Actions,
};

export default meta;
type Story = StoryObj<typeof AppBar.Actions>;

export const Actions: Story = {
  args: { children: <ButtonGroup size="md">{mainActions}</ButtonGroup> },
};
