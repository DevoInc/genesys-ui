import * as React from 'react';
import { type Meta, type StoryObj } from '@storybook/react';

import { Editor, DiffEditor } from '..';
import { rawLanguage } from '../__stories__/rawConfig';

import {
  CustomLang,
  MultipleEds,
  Programatic,
  Actions,
  MultipleLangs,
  Shortcuts,
  Diff,
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
type DiffStory = StoryObj<typeof DiffEditor>;

export const MultipleEditors: EditorStory = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({ value, ...props }) => <MultipleEds {...props} />,
};

export const MultipleLanguages: EditorStory = {
  render: MultipleLangs,
};

export const CustomLanguage: EditorStory = {
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

export const DiffEd: DiffStory = {
  render: (args) => (
    <Diff
      {...args}
      originalValue="jjuhiuhiuhiuhiujjj"
      modifiedValue="nincdskjcnsdkjn"
    />
  ),
};
