import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../../../Typography';
import { AppMenu } from '../../AppMenu';

const meta: Meta<typeof AppMenu.Body> = {
  title: 'Components/Navigation/AppMenu/Components/AppMenuBody',
  component: AppMenu.Body,
  args: {
    children: (
      <Typography.Paragraph>
        This should be the navigation content.
      </Typography.Paragraph>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof AppMenu.Body>;

export const Playground: Story = {};
