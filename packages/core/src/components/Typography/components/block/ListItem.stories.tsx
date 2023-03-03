import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../../..';

const meta: Meta<typeof Typography.ListItem> = {
  title: 'Components/Core/Text/Typography/Block',
  component: Typography.ListItem,
};

export default meta;
type Story = StoryObj<typeof Typography.ListItem>;

export const ListItem: Story = {
  args: {
    children: 'Apollonius of Perga take root and flourish.',
  },
};
