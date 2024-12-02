import { Meta, StoryObj } from '@storybook/react';

import { lorem } from '../../../../../stories/utils/fillerTexts';
import { PanelBody } from './PanelBody';

const meta: Meta<typeof PanelBody> = {
  title: 'Components/Layout/Panel/Components/PanelBody',
  component: PanelBody,
};

export default meta;
type Story = StoryObj<typeof PanelBody>;

export const Playground: Story = {
  args: {
    children: lorem,
  },
};
