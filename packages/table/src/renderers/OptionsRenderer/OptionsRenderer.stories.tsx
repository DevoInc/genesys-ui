import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { OptionsRenderer } from './OptionsRenderer';
import {
  GICheckOk,
  GIErrorWarningAlertAttention,
  GIExitClose,
} from '@devoinc/genesys-icons';

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
          'Item 1': { icon: <GICheckOk /> },
          'Item 2': { icon: <GIErrorWarningAlertAttention /> },
          'Item 3': { icon: <GIExitClose /> },
        },
      },
    },
  },
};
