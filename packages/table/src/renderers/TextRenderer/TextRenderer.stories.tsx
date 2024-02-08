import { Meta, StoryObj } from '@storybook/react';

import { TextRenderer } from './TextRenderer';

const meta: Meta<typeof TextRenderer> = {
  title: 'Components/Layout/Table/Renderers/TextRenderer',
  component: TextRenderer,
};

export default meta;
type Story = StoryObj<typeof TextRenderer>;

export const Base: Story = {
  args: {
    value: 'This a text renderer',
  },
};
