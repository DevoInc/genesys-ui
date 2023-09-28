import * as React from 'react';
import { useTheme } from 'styled-components';
import { type Meta, type StoryObj } from '@storybook/react';

import { SmartEditor, getTheme } from '../';
import { rawLanguage } from '../__stories__/rawConfig';

const meta: Meta<typeof SmartEditor> = {
  title: 'Components/Code/SmartEditor',
  component: SmartEditor,
  args: {
    bordered: true,
    value: rawLanguage.value,
    height: '300px',
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

export const Themed: Story = {
  render: (args) =>
    ((args) => {
      const theme = useTheme();
      return <SmartEditor theme={getTheme(theme)} {...args} />;
    })(args),
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
