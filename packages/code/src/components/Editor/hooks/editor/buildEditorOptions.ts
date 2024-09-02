import * as monaco from 'monaco-editor-core';
import { defaultOptions } from './defaults';
import { type IUseEditor } from './declarations';

export const buildEditorOptions = (
  options: IUseEditor['options'],
): monaco.editor.IStandaloneEditorConstructionOptions => ({
  // default options
  ...defaultOptions,
  renderLineHighlight: options.readOnly ? 'none' : 'all',
  // user options
  ...options,
});
