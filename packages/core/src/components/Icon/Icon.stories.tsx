import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Icon } from './Icon';
import { GIActivity } from '@devoinc/genesys-icons';

const meta: Meta<typeof Icon> = {
  title: 'Components/Feedback/Icon',
  component: Icon,
  args: { colorScheme: 'base' },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Base: Story = {
  args: {
    children: <GIActivity />,
  },
};

export const OverwritingProps: Story = {
  args: {
    children: <GIActivity size={120} />,
  },
};
