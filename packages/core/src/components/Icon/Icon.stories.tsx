import { Meta, StoryObj } from '@storybook/react';

import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Core/Feedback/Icon',
  component: Icon,
  args: { colorScheme: 'base' },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Base: Story = {
  args: {
    iconId: 'gi-activity',
  },
};
