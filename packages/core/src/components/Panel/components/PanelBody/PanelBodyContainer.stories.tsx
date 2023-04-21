import { Meta, StoryObj } from '@storybook/react';

import { PanelBodyContainer } from './PanelBodyContainer';

const meta: Meta<typeof PanelBodyContainer> = {
  title: 'Components/Core/Layout/Panel/Subcomponents',
  component: PanelBodyContainer,
};

export default meta;
type Story = StoryObj<typeof PanelBodyContainer>;

export const Body: Story = {
  args: {
    children: 'body',
  },
};
