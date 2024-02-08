import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { PanelContainer } from './PanelContainer';

const meta: Meta<typeof PanelContainer> = {
  title: 'Components/Layout/Panel/Subcomponents',
  component: PanelContainer,
};

export default meta;
type Story = StoryObj<typeof PanelContainer>;

export const Container: Story = {
  args: {
    children: (
      <div>
        <div>Line 1</div>
        <div>Line 2</div>
        <div>Line 3</div>
      </div>
    ),
  },
};
