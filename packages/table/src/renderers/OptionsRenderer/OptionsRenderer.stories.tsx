import { Meta, StoryObj } from '@storybook/react';

import { OptionsRenderer } from './OptionsRenderer';

const meta: Meta<typeof OptionsRenderer> = {
  title: 'Components/Layout/Table/Renderers/OptionsRenderer',
  component: OptionsRenderer,
};

export default meta;
type Story = StoryObj<typeof OptionsRenderer>;

export const Base: Story = {
  args: {
    value: ['Item 1', 'Item 2', 'Item 3'],
  },
};

export const ColorScheme: Story = {
  args: {
    value: ['Item 1', 'Item 2', 'Item 3'],
    colDef: {
      id: 'test',
      context: {
        options: {
          'Item 1': { colorScheme: 'success' },
          'Item 2': { colorScheme: 'warning' },
          'Item 3': { colorScheme: 'error' },
        },
      },
    },
  },
};

export const Icon: Story = {
  args: {
    value: ['Item 1', 'Item 2', 'Item 3'],
    colDef: {
      id: 'test',
      context: {
        options: {
          'Item 1': { icon: 'gi-check_ok' },
          'Item 2': { icon: 'gi-error_warning_alert_attention' },
          'Item 3': { icon: 'gi-exit_close' },
        },
      },
    },
  },
};
