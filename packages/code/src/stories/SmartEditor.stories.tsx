import { type Meta, type StoryObj } from '@storybook/react';

import { SmartEditor } from '../';

const meta: Meta<typeof SmartEditor> = {
  title: 'Components/Code/SmartEditor',
  component: SmartEditor,
  args: {
    bordered: true,
    value: "Hey! I'm smart!",
    height: '100px',
  },
};

export default meta;
type Story = StoryObj<typeof SmartEditor>;

export const Base: Story = {};

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
