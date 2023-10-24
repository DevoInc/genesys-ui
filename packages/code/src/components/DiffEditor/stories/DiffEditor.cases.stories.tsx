import * as React from 'react';
import { type Meta, type StoryObj } from '@storybook/react';

import { DiffEditor } from '../';

import {
  CustomLang,
  MultipleEds,
  Programatic,
  Actions,
  MultipleLangs,
  Shortcuts,
} from './cases';
import { rawLanguage } from '../../Editor/__stories__/languages/rawConfig';

const meta: Meta<typeof DiffEditor> = {
  title: 'Components/Code/DiffEditor/cases',
  component: DiffEditor,
  args: {
    originalValue: rawLanguage.value,
    modifiedValue: rawLanguage.value,
    height: '300px',
    bordered: true,
  },
};

export default meta;
type DiffEditorStory = StoryObj<typeof DiffEditor>;

export const MultipleDiffEditors: DiffEditorStory = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({ originalValue, modifiedValue, ...props }) => (
    <MultipleEds {...props} />
  ),
};

export const MultipleLanguages: DiffEditorStory = {
  render: MultipleLangs,
};

export const CustomLanguage: DiffEditorStory = {
  render: CustomLang,
};

export const WithActions: DiffEditorStory = {
  render: Actions,
};

export const ProgramaticActions: DiffEditorStory = {
  render: Programatic,
};

export const WithShortcuts: DiffEditorStory = {
  render: Shortcuts,
};
