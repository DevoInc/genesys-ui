import { Meta, StoryObj } from '@storybook/react';

import { PanelBody } from './PanelBody';

const meta: Meta<typeof PanelBody> = {
  title: 'Components/Core/Layout/Panel/Subcomponents',
  component: PanelBody,
};

export default meta;
type Story = StoryObj<typeof PanelBody>;

export const Body: Story = {
  args: {
    children: 'body',
  },
};
