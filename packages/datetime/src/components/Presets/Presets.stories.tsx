import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Presets } from './Presets';
import { Box } from '@devoinc/genesys-ui';

const meta: Meta<typeof Presets> = {
  title: 'Components/Datetime/Presets',
  component: Presets,
  args: {
    placeholder: 'Filter options...',
  },
};

export default meta;
type Story = StoryObj<typeof Presets>;

export const Base: Story = {
  render: (args) => (
    <Box height="300px">
      <Presets
        presets={[
          {
            label: 'Relative to',
            options: [
              {
                value: {
                  from: 'now() - 30s',
                  to: 'now()',
                },
                label: 'Last 30 seconds',
              },
              {
                value: {
                  from: 'now() - 1m',
                  to: 'now()',
                },
                label: 'Last minute',
              },
            ],
          },
          {
            label: 'Snap to',
            options: [
              {
                value: {
                  from: 'now() @ 1m',
                  to: 'now()',
                },
                label: 'Minute',
              },
            ],
          },
        ]}
        {...args}
      />
    </Box>
  ),
  args: { value: { from: 'now() - 1m', to: 'now()' } },
};
