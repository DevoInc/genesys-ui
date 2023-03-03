import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Presets } from '../';
import { Box } from '@devoinc/genesys-ui';
import { useDefaultPresets } from './useDefaultPresets';

const meta: Meta<typeof Presets> = {
  title: 'Components/Datetime/Presets/Hooks',
  component: Presets,
  args: {
    placeholder: 'Filter options...',
  },
};

export default meta;
type Story = StoryObj<typeof Presets>;

export const DefaultPresets: Story = {
  render: (args) =>
    (() => {
      const presets = useDefaultPresets();
      return (
        <Box height="300px">
          <Presets presets={presets} {...args} />
        </Box>
      );
    })(),
  args: { value: { from: 'now() - 1m', to: 'now()' } },
  parameters: {
    controls: false,
  },
};
