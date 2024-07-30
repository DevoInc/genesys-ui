import { Meta, StoryObj } from '@storybook/react';

import { ListItem } from './ListItem';

const meta: Meta<typeof ListItem> = {
  title: 'Components/Text/Typography/Block/List',
  component: ListItem,
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const BaseListItem: Story = {
  args: {
    children: 'Apollonius of Perga take root and flourish.',
  },
};
