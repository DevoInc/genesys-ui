import { Meta, StoryObj } from '@storybook/react';

import { PanelSection } from '..';
import { TextBlock } from '../Panel/__stories__/helpers';

const meta: Meta<typeof PanelSection> = {
  title: 'Components/Core/Layout/PanelSection',
  component: PanelSection,
  args: {
    backwardTooltip: 'Back',
    footerHasBackground: false,
    height: '100%',
    removeContentSpace: false,
  },
};

export default meta;
type Story = StoryObj<typeof PanelSection>;

export const Base: Story = {
  args: {
    children: TextBlock,
  },
};
