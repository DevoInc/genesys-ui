import { Meta, StoryObj } from '@storybook/react';

import { PanelFooter } from './PanelFooter';

const meta: Meta<typeof PanelFooter> = {
  title: 'Components/Layout/Panel/Components',
  component: PanelFooter,
  args: {
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof PanelFooter>;

export const Footer: Story = {
  args: {
    children: 'Footer help text.',
  },
};
