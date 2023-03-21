import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { PanelSection, Button } from '..';
import { TextBlock } from '../Panel/__stories__/helpers';

const meta: Meta<typeof PanelSection> = {
  title: 'Components/Core/Layout/PanelSection/Cases',
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

export const WithScroll: Story = {
  args: {
    title: 'Panel title',
    subtitle: 'Panel subtitle',
    helpUrl: 'https://www.devo.com/',
    helpTooltip: 'Go to docs',
    height: '300px',
    removeContentSpace: true,
    children: TextBlock,
  },
};

export const WithFooterActions: Story = {
  args: {
    title: 'Panel title',
    subtitle: 'Panel subtitle',
    helpUrl: 'https://www.devo.com/',
    helpTooltip: 'Go to docs',
    footerActions: [<Button key="btn-1">OK</Button>],
    children: TextBlock,
  },
};
