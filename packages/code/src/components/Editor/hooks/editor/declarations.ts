import * as monaco from 'monaco-editor-core';
import * as React from 'react';

type Monaco = typeof monaco;

export interface IUseEditorParams {
  /**
   * Value of the current model
   */
  value?: string;
  /**
   * Theme data to customize the editor
   */
  theme?: { id: string; themeData: monaco.editor.IStandaloneThemeData };
  /**
   * Language of the current model
   */
  language?: string;
  /**
   * An event is emitted before the editor is mounted
   * Defaults to "noop"
   */
  beforeMount?: (monaco: Monaco) => void;
  /**
   * An event is emitted when the editor is mounted
   * Defaults to "noop"
   */
  onMount?: (
    editor: monaco.editor.IStandaloneCodeEditor,
    monaco: Monaco,
  ) => void;
  /**
   * An event is emitted when the content of the current model is changed
   * Defaults to "noop"
   */
  onChange?: (
    value: string | undefined,
    ev: monaco.editor.IModelContentChangedEvent,
    editor: monaco.editor.IStandaloneCodeEditor,
    monaco: Monaco,
  ) => void;
  /**
   * An event is emitted when the content of the current model is changed
   * and the current model markers are ready
   * Defaults to "noop"
   */
  onValidate?: (markers: monaco.editor.IMarker[]) => void;
  /**
   * IStandaloneEditorConstructionOptions
   */
  options?: monaco.editor.IStandaloneEditorConstructionOptions;
}

export type TUseEditor = (params: IUseEditorParams) => {
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
};
