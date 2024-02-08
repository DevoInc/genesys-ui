import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { SplitPane } from '.';

const meta: Meta<typeof SplitPane> = {
  title: 'Components/Layout/SplitPane',
  component: SplitPane,
  parameters: {
    info: {
      propTables: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof SplitPane>;

export const Base: Story = {
  render: (args) =>
    ((args) => (
      <SplitPane {...args}>
        <div>Block One</div>
        <div>Block Two</div>
      </SplitPane>
    ))(args),
};
