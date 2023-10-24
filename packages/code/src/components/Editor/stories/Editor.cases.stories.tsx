import * as React from 'react';
import { type Meta, type StoryObj } from '@storybook/react';

import { Editor } from '..';
import { rawLanguage } from '../__stories__/languages/rawConfig';

import {
  CustomLang,
  MultipleEds,
  Programatic,
  Actions,
  MultipleLangs,
  Shortcuts,
} from './cases';

const meta: Meta<typeof Editor> = {
  title: 'Components/Code/Editor/cases',
  component: Editor,
  args: {
    value: rawLanguage.value,
    height: '300px',
    bordered: true,
  },
};

export default meta;
type EditorStory = StoryObj<typeof Editor>;

export const MultipleEditors: EditorStory = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({ value, ...props }) => <MultipleEds {...props} />,
};

export const CustomLanguage: EditorStory = {
  render: CustomLang,
};

export const MultipleCustomLanguages: EditorStory = {
  render: MultipleLangs,
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
