import * as React from 'react';
import type * as monaco from 'monaco-editor-core';

import { Editor, EditorProps, registerLanguage } from '../../';
import { jason } from '../../__stories__/languages/jason';
import { esql } from '../../__stories__/languages/esql';

type Monaco = typeof monaco;

const opts: monaco.editor.IEditorOptions = {
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
  jason: jason,
  esql: esql,
};

export const CustomLang = ({
  langId = 'jason',
  options,
  ...props
}: Partial<EditorProps & { langId: string }>) => {
  const editorRef = React.useRef<monaco.editor.IStandaloneCodeEditor>();
  const monacoRef = React.useRef<Monaco>();

  const registerLanguageProviders = (monaco) => {
    registerLanguage(monaco, languages[langId].id)
      // register highlighting
      .registerStyleTokenizer(languages[langId].lang)
      // register autocompletion
      .registerCompletionProvider(languages[langId].completionProvider);
  };

  const handleEditorDidMount = (
    editor: monaco.editor.IStandaloneCodeEditor,
    monaco: Monaco,
  ) => {
    editorRef.current = editor;
    monacoRef.current = monaco;

    // Validate the initial content of the editor
    validateEditorContent(editor.getValue());
  };

  const handleValidate = (markers) => {
    // eslint-disable-next-line no-console
    console.log('Errors found', markers);
  };

  const validateEditorContent = (value: string) => {
    const monaco = monacoRef.current;
    // validate that the content is a valid JSON. If there is an error,
    // locate the position of the error and mark it in the editor
    try {
      JSON.parse(value);
      monaco.editor.setModelMarkers(editorRef.current.getModel(), 'owner', []);
    } catch (err) {
      const message = err.message;
      const model = editorRef.current.getModel();
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
      monaco.editor.setModelMarkers(editorRef.current.getModel(), 'owner', [
        error,
      ]);
    }
  };

  return (
    <Editor
      height="300px"
      bordered={true}
      options={{ ...opts, ...options }}
      language={langId}
      value={languages[langId].value}
      onMount={handleEditorDidMount}
      beforeMount={registerLanguageProviders}
      onChange={validateEditorContent}
      onValidate={handleValidate}
      {...props}
    />
  );
};
