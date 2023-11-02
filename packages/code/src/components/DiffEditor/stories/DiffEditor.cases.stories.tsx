import * as React from 'react';
import { type Meta, type StoryObj } from '@storybook/react';

import { DiffEditor } from '../';

import {
  CustomLang,
  MultipleEds,
  Programatic,
  Actions,
  Shortcuts,
  CustomThemed,
} from './cases';
import { jason } from '../../Editor/__stories__/languages/jason';

const meta: Meta<typeof DiffEditor> = {
  title: 'Components/Code/DiffEditor/cases',
  component: DiffEditor,
  args: {
    originalValue: jason.value,
    modifiedValue: jason.value.replaceAll('Grid', 'Flex'),
    height: '300px',
    bordered: true,
  },
};

export default meta;
type DiffEditorStory = StoryObj<typeof DiffEditor>;

export const CustomLanguageWithValidation: DiffEditorStory = {
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

export const CustomTheme: DiffEditorStory = {
  render: CustomThemed,
};

export const MultipleDiffEditors: DiffEditorStory = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({ originalValue, modifiedValue, ...props }) => (
    <MultipleEds {...props} />
  ),
};
