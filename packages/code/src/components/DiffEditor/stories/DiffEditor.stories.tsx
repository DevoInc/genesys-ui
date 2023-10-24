import { type Meta, type StoryObj } from '@storybook/react';

import { DiffEditor } from '../DiffEditor';
import {
  modifiedValue,
  originalValue,
} from '../../Editor/__stories__/mockContent';

const meta: Meta<typeof DiffEditor> = {
  title: 'Components/Code/DiffEditor',
  component: DiffEditor,
  args: {
    bordered: true,
    originalValue: originalValue.concat(originalValue),
    modifiedValue: modifiedValue,
    height: '300px',
  },
};

export default meta;
type Story = StoryObj<typeof DiffEditor>;

export const Base: Story = {};

export const NoDifference: Story = {
  args: {
    originalValue: originalValue,
    modifiedValue: originalValue,
  },
};

export const ReadonlyMode: Story = {
  args: {
    options: {
      readOnly: true,
    },
  },
};

export const BothEditorsEditable: Story = {
  args: {
    options: {
      readOnly: false,
      originalEditable: true,
    },
  },
};

export const WithoutLineNumbers: Story = {
  args: {
    options: {
      //No line numbers
      lineNumbers: 'off',
      // No collapse icons
      folding: false,
      //No line decorations
      lineDecorationsWidth: 0,
    },
  },
};

export const SmallerTextSize: Story = {
  args: {
    options: {
      fontSize: 10,
    },
  },
};
