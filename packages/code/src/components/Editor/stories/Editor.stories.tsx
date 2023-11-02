import { type Meta, type StoryObj } from '@storybook/react';

import { Editor } from '../';
import { originalValue } from '../__stories__/mockContent';

const meta: Meta<typeof Editor> = {
  title: 'Components/Code/Editor',
  component: Editor,
  args: {
    bordered: true,
    value: 'Hey there!, I am a code editor',
    height: '300px',
  },
};

export default meta;
type Story = StoryObj<typeof Editor>;

export const Base: Story = {
  args: {
    value: originalValue.concat(originalValue).concat(originalValue),
  },
};

export const ReadonlyMode: Story = {
  args: {
    options: {
      readOnly: true,
    },
  },
};

export const WithMinimap: Story = {
  args: {
    options: {
      minimap: {
        enabled: true,
      },
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
