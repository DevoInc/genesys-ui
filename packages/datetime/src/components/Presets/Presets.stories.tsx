import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Presets } from './Presets';
import { Box } from '@devoinc/genesys-ui';
import { getDefaultPresets } from './defaults';
import type { TDateRange } from '../../declarations';

const meta: Meta<typeof Presets> = {
  title: 'Components/Datetime/Presets',
  component: Presets,
  args: {
    placeholder: 'Filter options...',
  },
};

export default meta;
type Story = StoryObj<typeof Presets>;

export const Playground: Story = {
  render: () => {
    const [value, setValue] = React.useState<TDateRange>([1]);
    return (
      <Box height="300px">
        <Presets
          id={'presets'}
          presets={[
            { label: 'Group 1' },
            { label: 'Preset 1', value: [1] },
            { label: 'Preset 2', value: [2] },
            { label: 'Group 2' },
            { label: 'Preset 3', value: [3] },
          ]}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    );
  },
};

const now = new Date().getTime();
export const Default: Story = {
  tags: ['isHidden'],
  render: () => {
    const [value, setValue] = React.useState<TDateRange>([]);
    return (
      <Box height="300px">
        <Presets
          id={'presets'}
          presets={getDefaultPresets(now)}
          maxMenuHeight={250}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    );
  },
};
