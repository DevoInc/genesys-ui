import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box } from '../Box';
import { SplitLayout } from './SplitLayout';

const meta: Meta<typeof SplitLayout> = {
  title: 'Components/Layout/SplitLayout',
  component: SplitLayout,
  parameters: {
    layout: 'fullscreen',
    info: {
      propTables: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof SplitLayout>;

export const Base: Story = {
  render: (args) =>
    ((props) => (
      <Box height="30rem">
        <SplitLayout {...props}>
          <div>Block One</div>
          <div>Block Two</div>
        </SplitLayout>
      </Box>
    ))(args),
};

export const Three: Story = {
  args: {
    sizes: [25, 50, 25],
  },
  render: (args) =>
    ((props) => (
      <Box height="30rem">
        <SplitLayout {...props}>
          <div>Block One</div>
          <div>Block Two</div>
          <div>Block Three</div>
        </SplitLayout>
      </Box>
    ))(args),
};

export const Nested: Story = {
  render: (args) =>
    ((props) => (
      <Box height="30rem">
        <SplitLayout {...props}>
          <SplitLayout direction={'vertical'}>
            <div>Block One</div>
            <div>Block Two</div>
          </SplitLayout>
          <div>Block Three</div>
        </SplitLayout>
      </Box>
    ))(args),
};
