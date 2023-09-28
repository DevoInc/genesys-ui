import * as monaco from 'monaco-editor-core';
import { defaultOptions } from './defaults';
import { type UseEditorParams } from './useEditor';

export const buildEditorOptions = (
  options: UseEditorParams['options'],
): monaco.editor.IStandaloneEditorConstructionOptions => ({
  ...defaultOptions,
  ...{ renderLineHighlight: options.readOnly ? 'none' : 'all' },
  ...options,
});
