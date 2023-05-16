import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../../..';
import { lorem } from '../../../../../stories/utils/fillerTexts';
import * as React from 'react';

const meta: Meta<typeof Typography.Paragraph> = {
  title: 'Components/Core/Text/Typography/Block',
  component: Typography.Paragraph,
};

export default meta;
type Story = StoryObj<typeof Typography.Paragraph>;

export const Paragraph: Story = {
  args: {
    children: lorem,
  },
};
