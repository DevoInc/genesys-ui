import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { SplitPane } from '.';
import { Box } from '../Box';

const meta: Meta<typeof SplitPane> = {
  title: 'Components/Layout/SplitPane/Cases',
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
    ((props) => (
      <Box height="60rem">
        <SplitPane {...props}>
          <SplitPane vertical={true}>
            <div>Block One</div>
            <div>Block Two</div>
          </SplitPane>
          <div>Block Three</div>
        </SplitPane>
      </Box>
    ))(args),
};
