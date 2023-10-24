import * as React from 'react';
import * as monaco from 'monaco-editor-core';
import { useUpdateEffect } from 'ahooks';

import { buildEditorOptions } from '../../Editor/hooks/useEditor/buildEditorOptions';

type Monaco = typeof monaco;

export interface UseDiffEditorParams {
  /**
   * Value of the original editor (leftmost)
   */
  originalValue?: string;
  /**
   * Value of the modified editor (rightmost)
   */
  modifiedValue?: string;
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
    editor: monaco.editor.IStandaloneDiffEditor,
    monaco: Monaco,
  ) => void;
  /**
   * An event is emitted when the content of the current model is changed
   * Defaults to "noop"
   */
  onChange?: (
    value: { original: string; modified: string } | undefined,
    editor: monaco.editor.IStandaloneDiffEditor,
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
  options?: monaco.editor.IDiffEditorConstructionOptions;
}

export type UseDiffEditor = (params: UseDiffEditorParams) => {
  containerRef: React.MutableRefObject<HTMLDivElement | null>;
};

export const useDiffEditor: UseDiffEditor = ({
  originalValue = '',
  modifiedValue = '',
  theme,
  language,
  beforeMount,
  onMount,
  onChange,
  onValidate,
  options: externalOptions = {},
}) => {
  const editorRef = React.useRef<monaco.editor.IStandaloneDiffEditor>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Extend default options with external options
  const options: monaco.editor.IDiffEditorConstructionOptions =
    buildEditorOptions(externalOptions);

  React.useEffect(() => {
    ////////////////////////////////////////////
    // Instantiate monaco editor
    if (monaco && containerRef) {
      beforeMount?.(monaco);
      editorRef.current = monaco.editor.createDiffEditor(containerRef.current, {
        ...options,
      });
      editorRef.current.setModel({
        original: monaco.editor.createModel(originalValue, language),
        modified: monaco.editor.createModel(modifiedValue, language),
      });
      onMount?.(editorRef.current, monaco);
    }

    ////////////////////////////////////////////
    // Call onChange callback on content change
    const { dispose: disposeOnModelChange } = editorRef.current.onDidUpdateDiff(
      () => {
        onChange?.(
          {
            original: editorRef.current.getOriginalEditor().getValue(),
            modified: editorRef.current.getModifiedEditor().getValue(),
          },
          editorRef.current,
          monaco,
        );
      },
    );

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
        // Markers only apply to the modified editor
        const currentEditorUri = editorRef.current
          .getModifiedEditor()
          .getModel()?.uri;

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
      disposeOnModelChange();
      disposeOnMarkersChange();
      editorRef.current?.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useUpdateEffect(() => {
    ////////////////////////////////////////////
    // Update monaco editor on language change
    if (monaco) {
      monaco.editor.setModelLanguage(
        editorRef.current?.getModel().original,
        language,
      );
      monaco.editor.setModelLanguage(
        editorRef.current?.getModel().modified,
        language,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  useUpdateEffect(() => {
    ////////////////////////////////////////////
    // Update monaco editor on value change
    if (monaco) {
      editorRef.current?.setModel({
        original: monaco.editor.createModel(originalValue, language),
        modified: monaco.editor.createModel(modifiedValue, language),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [originalValue, modifiedValue]);

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
