import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { SplitPanel } from '..';

const meta: Meta<typeof SplitPanel> = {
  title: 'Components/Core/Layout/SplitPanel',
  component: SplitPanel,
  parameters: {
    info: {
      propTables: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof SplitPanel>;

const percentage = true;
const secondaryInitialSize = 50;

export const Base: Story = {
  render: (args) =>
    ((args) => (
      <SplitPanel {...args}>
        <div>Block One</div>
        <div>Block Two</div>
      </SplitPanel>
    ))(args),
};

export const Complex: Story = {
  args: {
    percentage,
    secondaryInitialSize,
  },
  render: (args) =>
    ((args) => (
      <SplitPanel {...args}>
        <SplitPanel vertical={true}>
          <div>Block One</div>
          <div>Block Two</div>
        </SplitPanel>
        <div>Block Three</div>
      </SplitPanel>
    ))(args),
};
