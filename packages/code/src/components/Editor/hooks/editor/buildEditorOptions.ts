import * as monaco from 'monaco-editor-core';
import { defaultOptions } from './defaults';
import { type IUseEditorParams } from './declarations';

export const buildEditorOptions = (
  options: IUseEditorParams['options'],
): monaco.editor.IStandaloneEditorConstructionOptions => ({
  // default options
  ...defaultOptions,
  ...{ renderLineHighlight: options.readOnly ? 'none' : 'all' },
  // user options
  ...options,
});
