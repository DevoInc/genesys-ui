import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { SplitPane } from '.';

const meta: Meta<typeof SplitPane> = {
  title: 'Components/Core/Layout/SplitPane/Cases',
  component: SplitPane,
  parameters: {
    info: {
      propTables: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof SplitPane>;

const percentage = true;
const secondaryInitialSize = 50;

export const Nested: Story = {
  args: {
    percentage,
    secondaryInitialSize,
  },
  render: (args) =>
    ((args) => (
      <SplitPane {...args}>
        <SplitPane vertical={true}>
          <div>Block One</div>
          <div>Block Two</div>
        </SplitPane>
        <div>Block Three</div>
      </SplitPane>
    ))(args),
};
