import * as React from 'react';
import { type Meta, type StoryObj } from '@storybook/react';

import { SmartEditor, DiffEditor } from '../';
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
type SmartStory = StoryObj<typeof SmartEditor>;
type DiffStory = StoryObj<typeof DiffEditor>;

export const MultipleEditors: SmartStory = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({ value, ...props }) => <MultipleEds {...props} />,
};

export const MultipleLanguages: SmartStory = {
  render: MultipleLangs,
};

export const CustomLanguage: SmartStory = {
  render: CustomLang,
};

export const WithActions: SmartStory = {
  render: Actions,
};

export const ProgramaticActions: SmartStory = {
  render: Programatic,
};

export const WithShortcuts: SmartStory = {
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
