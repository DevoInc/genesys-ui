import * as React from 'react';
import * as monaco from 'monaco-editor-core';
import { useUpdateEffect } from 'ahooks';

import { buildEditorOptions } from './buildEditorOptions';

type Monaco = typeof monaco;

export interface UseEditorParams {
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

export type UseEditor = (params: UseEditorParams) => {
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
};

export const useEditor: UseEditor = ({
  value = '',
  theme,
  language,
  beforeMount,
  onMount,
  onChange,
  onValidate,
  options: externalOptions = {},
}) => {
  const editorRef = React.useRef<monaco.editor.IStandaloneCodeEditor>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Extend default options with external options
  const options: monaco.editor.IStandaloneEditorConstructionOptions =
    buildEditorOptions(externalOptions);

  React.useEffect(() => {
    ////////////////////////////////////////////
    // Instantiate monaco editor
    if (monaco && containerRef) {
      beforeMount?.(monaco);
      editorRef.current = monaco.editor.create(containerRef.current, {
        language,
        value,
        ...options,
      });
      onMount?.(editorRef.current, monaco);
    }
    return () => {
      editorRef.current?.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    ////////////////////////////////////////////
    // Call onChange callback on content change
    const { dispose: disposeOnModelChange } =
      editorRef.current.onDidChangeModelContent(
        (event: monaco.editor.IModelContentChangedEvent) => {
          onChange?.(
            editorRef.current.getValue(),
            event,
            editorRef.current,
            monaco,
          );
        },
      );
    return () => {
      disposeOnModelChange();
    };
  }, [onChange]);

  React.useEffect(() => {
    ////////////////////////////////////////////
    // Call onValidate callback on model markers change
    /**
     * Markers event emitter is shared across all active
     * instances of the editor. Therefore, before calling
     * onValidate we need to ensure we are emitting to
     * the editor that triggered the change. This only
     * applies to cases where multiple editors are active
     * at the same time.
     */
    const { dispose: disposeOnMarkersChange } =
      monaco.editor.onDidChangeMarkers((uris) => {
        const currentEditorUri = editorRef.current.getModel()?.uri;

        if (currentEditorUri) {
          const currentEditorHasMarkerChanges = uris.find(
            (uri) => uri.path === currentEditorUri.path,
          );

          if (currentEditorHasMarkerChanges) {
            onValidate?.(
              monaco.editor.getModelMarkers({
                resource: currentEditorUri,
              }),
            );
          }
        }
      });

    return () => {
      disposeOnMarkersChange();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onValidate]);

  useUpdateEffect(() => {
    ////////////////////////////////////////////
    // Update monaco editor on language change
    if (monaco) {
      monaco.editor.setModelLanguage(editorRef.current?.getModel(), language);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  useUpdateEffect(() => {
    ////////////////////////////////////////////
    // Update monaco editor on value change
    // Only update if the value has changed
    if (monaco) {
      const editor = editorRef.current;
      if (editor.getValue() !== value) {
        editorRef.current?.setValue(value);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useUpdateEffect(() => {
    ////////////////////////////////////////////
    // Update editor options on change
    if (editorRef.current && options) {
      editorRef.current.updateOptions(options);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  React.useEffect(() => {
    ////////////////////////////////////////////
    // Register and apply theme on theme change.
    // editorRef.current._themeService._knownThemes
    if (monaco) {
      if (theme?.id && theme?.themeData) {
        // Monaco already checks to avoid redefining an existing theme.
        monaco.editor.defineTheme(theme.id, theme.themeData);
        monaco.editor.setTheme(theme.id);
      } else {
        // Cleans up last theme when none is selected.
        // This could be default to 'vs' or other preloaded presets.
        monaco.editor.setTheme('');
      }
    }
    // TODO: The dependency array should use the theme fullName, when it's available
    // { scheme: 'light', name: 'devo', fullName: 'devo-light',  }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme?.id]);

  ////////////////////////////////////////////
  return { containerRef };
};
