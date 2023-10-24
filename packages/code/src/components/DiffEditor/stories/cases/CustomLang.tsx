import * as React from 'react';
import type * as monaco from 'monaco-editor-core';

import { DiffEditor, type DiffEditorProps } from '../../';
import { rawLanguage } from '../../../Editor/__stories__/languages/rawConfig';
import { dedalLanguage } from '../../../Editor/__stories__/languages/dedal';
import {
  registerCompletionProvider,
  registerStyleTokenizer,
} from '../../../Editor';

type Monaco = typeof monaco;

const opts: monaco.editor.IDiffEditorOptions = {
  // enable error batches in scrollbar to be shown.
  overviewRulerLanes: 2,
  // enable folding of code blocks
  folding: true,
  // enable minimap
  minimap: {
    enabled: true,
  },
};

const languages = {
  rawConfig: rawLanguage,
  dedal: dedalLanguage,
};

export const CustomLang = ({
  langId = 'rawConfig',
  options,
  ...props
}: Partial<DiffEditorProps & { langId: string }>) => {
  const editorRef = React.useRef<monaco.editor.IStandaloneDiffEditor>();
  const monacoRef = React.useRef<Monaco>();

  const registerLanguageProviders = (monaco) => {
    // Register highlighting
    registerStyleTokenizer(
      monaco,
      languages[langId].id,
      languages[langId].lang,
    );
    // Register autocompletion
    registerCompletionProvider(
      monaco,
      languages[langId].id,
      languages[langId].completionProvider,
    );
  };

  const handleEditorDidMount = (
    editor: monaco.editor.IStandaloneDiffEditor,
    monaco: Monaco,
  ) => {
    editorRef.current = editor;
    monacoRef.current = monaco;
  };

  const handleValidate = (markers) => {
    console.log('Errors found', markers);
  };

  const validateEditorContent = (value: {
    original: string;
    modified: string;
  }) => {
    const monaco = monacoRef.current;
    // validate that the content is a valid JSON. If there is an error,
    // locate the position of the error and mark it in the editor
    try {
      // As only the left editor is editable, we only validate the modified content.
      JSON.parse(value.modified);
      monaco.editor.setModelMarkers(
        editorRef.current.getModel().modified,
        'owner',
        [],
      );
    } catch (err) {
      const message = err.message;
      const model = editorRef.current.getModel().modified;
      const position = message.match(/position (\d+)/)?.[1];

      // Position of the error in the string
      // OR current cursor postion
      // OR fallback to the first character
      const cursorPosition = position
        ? model.getPositionAt(position)
        : editorRef.current.getPosition() || model.getPositionAt(1);

      const { lineNumber, column } = cursorPosition;
      const error = {
        severity: monaco.MarkerSeverity.Error,
        startLineNumber: lineNumber,
        endLineNumber: lineNumber,
        startColumn: column,
        endColumn: column,
        message: err.message,
      };
      monaco.editor.setModelMarkers(
        editorRef.current.getModel().modified,
        'owner',
        [error],
      );
    }
  };

  return (
    <DiffEditor
      height="300px"
      bordered={true}
      options={{ ...opts, ...options }}
      language={langId}
      originalValue={languages[langId].value}
      modifiedValue={languages[langId].value}
      onMount={handleEditorDidMount}
      beforeMount={registerLanguageProviders}
      onChange={validateEditorContent}
      onValidate={handleValidate}
      {...props}
    />
  );
};
