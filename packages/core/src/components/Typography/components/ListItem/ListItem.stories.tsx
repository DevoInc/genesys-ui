import { Meta, StoryObj } from '@storybook/react-vite';

import { ListItem } from './ListItem';

const meta: Meta<typeof ListItem> = {
  title: 'Components/Text/Typography/Components/Block/ListItem',
  component: ListItem,
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const BaseListItem: Story = {
  tags: ['isHidden'],
  args: {
    children: 'Apollonius of Perga take root and flourish.',
  },
};
