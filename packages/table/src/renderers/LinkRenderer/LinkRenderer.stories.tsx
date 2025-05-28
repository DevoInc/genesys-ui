import { Meta, StoryObj } from '@storybook/react-vite';

import { LinkRenderer } from './LinkRenderer';

const meta: Meta<typeof LinkRenderer> = {
  title: 'Components/Layout/Table/Renderers/LinkRenderer',
  component: LinkRenderer,
};

export default meta;
type Story = StoryObj<typeof LinkRenderer>;

export const Base: Story = {
  args: {
    value: 'https://us.devo.com',
  },
};
