import { Meta, StoryObj } from '@storybook/react-vite';

import { Caption } from './Caption';

const meta: Meta<typeof Caption> = {
  title: 'Components/Text/Typography/Components/Block/Caption',
  component: Caption,
  args: {
    children: 'This is the Caption content',
  },
};

export default meta;
type Story = StoryObj<typeof Caption>;

export const Playground: Story = {};
