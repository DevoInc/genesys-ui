import { Meta, StoryObj } from '@storybook/react';

import { Label } from '..';

const meta: Meta<typeof Label> = {
  title: 'Components/Core/Form/Label',
  component: Label,
  args: {
    colorScheme: 'strong',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Base: Story = {
  args: {
    children: 'Example',
  },
};
