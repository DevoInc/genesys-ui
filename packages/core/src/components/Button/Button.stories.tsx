import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../..';

const meta: Meta<typeof Button> = {
  title: 'Components/Core/Button/Button',
  component: Button,
  args: {
    children: 'Button label',
    iconPosition: 'left',
    colorScheme: 'neutral',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Base: Story = {};
