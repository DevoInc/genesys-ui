import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Presets } from './Presets';
import { Box } from '@devoinc/genesys-ui';
import { defaultPresets } from './defaults';

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
  render: () =>
    (() => {
      const [value, setValue] = React.useState('preset-1');
      return (
        <Box height="300px">
          <Presets
            id={'presets'}
            presets={[
              { label: 'Group 1' },
              { label: 'Preset 1', value: 'preset-1' },
              { label: 'Preset 2', value: 'preset-2' },
              { label: 'Group 2' },
              { label: 'Preset 3', value: 'preset-3' },
            ]}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
      );
    })(),
  args: {},
};

export const Default: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      const [value, setValue] = React.useState('preset-1');
      return (
        <Box height="300px">
          <Presets
            id={'presets'}
            presets={defaultPresets}
            maxMenuHeight={250}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
      );
    })(),
  args: {},
};
