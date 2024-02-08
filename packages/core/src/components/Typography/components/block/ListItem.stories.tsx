import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../../..';

const meta: Meta<typeof Typography.List.Item> = {
  title: 'Components/Text/Typography/Block/List',
  component: Typography.List.Item,
};

export default meta;
type Story = StoryObj<typeof Typography.List.Item>;

export const ListItem: Story = {
  args: {
    children: 'Apollonius of Perga take root and flourish.',
  },
};
