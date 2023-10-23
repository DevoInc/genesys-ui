import * as monaco from 'monaco-editor-core';
import { defaultOptions } from './defaults';
import { type UseEditorParams } from './useEditor';

export const buildEditorOptions = (
  options: UseEditorParams['options'],
): monaco.editor.IStandaloneEditorConstructionOptions => ({
  // default options
  ...defaultOptions,
  ...{ renderLineHighlight: options.readOnly ? 'none' : 'all' },
  // user options
  ...options,
});

// opciones que me pasa el usuario y que están en las por defecto se sobreescriben
// - cuando están a primer nivel se sobreescriben.
// - cuando son objetos, se sobreescribe el objeto entero.
