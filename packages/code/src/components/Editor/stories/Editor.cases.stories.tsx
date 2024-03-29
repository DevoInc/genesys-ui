import * as React from 'react';
import { type Meta, type StoryObj } from '@storybook/react';

import { Editor } from '..';
import { jason } from '../__stories__/languages/jason';

import {
  CustomLang,
  MultipleEds,
  Programatic,
  Actions,
  Shortcuts,
  CustomThemed,
} from './cases';

const meta: Meta<typeof Editor> = {
  title: 'Components/Code/Editor/cases',
  component: Editor,
  args: {
    value: jason.value,
    height: '300px',
    bordered: true,
  },
};

export default meta;
type EditorStory = StoryObj<typeof Editor>;

export const CustomLanguageWithValidation: EditorStory = {
  render: CustomLang,
};

export const WithActions: EditorStory = {
  render: Actions,
};

export const ProgramaticActions: EditorStory = {
  render: Programatic,
};

export const WithShortcuts: EditorStory = {
  render: Shortcuts,
};

export const CustomTheme: EditorStory = {
  render: CustomThemed,
};

export const MultipleEditors: EditorStory = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({ value, ...props }) => <MultipleEds {...props} />,
};
