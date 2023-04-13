import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { AppBarActions } from '..';
import { mainActions } from '../../__stories__/content';
import { ButtonGroup } from '../../../ButtonGroup';

const meta: Meta<typeof AppBarActions> = {
  title: 'Components/Core/Navigation/AppBar/Subcomponents',
  component: AppBarActions,
};

export default meta;
type Story = StoryObj<typeof AppBarActions>;

export const Actions: Story = {
  args: { children: <ButtonGroup size="md">{mainActions}</ButtonGroup> },
};
