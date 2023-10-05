import * as React from 'react';
import { type Meta, type StoryObj } from '@storybook/react';

import { SmartEditor } from '../';
import { rawLanguage } from '../__stories__/rawConfig';

import {
  CustomLang,
  MultipleEds,
  Programatic,
  Actions,
  MultipleLangs,
  Shortcuts,
} from './cases';

const meta: Meta<typeof SmartEditor> = {
  title: 'Components/Code/SmartEditor/cases',
  component: SmartEditor,
  args: {
    value: rawLanguage.value,
    height: '300px',
    bordered: true,
  },
};

export default meta;
type Story = StoryObj<typeof SmartEditor>;

export const MultipleEditors: Story = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({ value, ...props }) => <MultipleEds {...props} />,
};

export const MultipleLanguages: Story = {
  render: MultipleLangs,
};

export const CustomLanguage: Story = {
  render: CustomLang,
};

export const WithActions: Story = {
  render: Actions,
};

export const ProgramaticActions: Story = {
  render: Programatic,
};

export const WithShortcuts: Story = {
  render: Shortcuts,
};
