import * as React from 'react';
import type * as monaco from 'monaco-editor-core';

import { IconButton, ButtonGroup } from '@devoinc/genesys-ui';
import { Editor, EditorProps } from '../../';
import {
  GIDocumentsFilesPaperTextArchiveCopy,
  GIPasteClipboard,
} from '@devoinc/genesys-icons';

export const Actions = ({ ...props }: Partial<EditorProps>) => {
  const editorRef = React.useRef<monaco.editor.IStandaloneCodeEditor>();

  const handleEditorDidMount = (
    editor: monaco.editor.IStandaloneCodeEditor,
  ) => {
    editorRef.current = editor;
  };

  const handleCopyToClipboard = () => {
    const value = editorRef.current.getValue();
    navigator.clipboard
      .writeText(value)
      .then(() => {
        // eslint-disable-next-line no-console
        console.log('Copied to clipboard:', value);
      })
      .catch((err) => {
        console.error('Failed to copy to clipboard', err);
      });
  };

  const handlePasteToEditor = () => {
    navigator.clipboard
      .readText()
      .then((value) => {
        //Append to current value
        const currentValue = editorRef.current.getValue();
        editorRef.current.setValue(currentValue.concat(value));
      })
      .catch((err) => {
        console.error('Failed to paste from clipboard', err);
      });
  };

  return (
    <Editor
      {...props}
      height="300px"
      bordered={true}
      value={'Copy me!\n'}
      onMount={handleEditorDidMount}
      actions={
        <ButtonGroup>
          <IconButton
            key="copy"
            icon={<GIDocumentsFilesPaperTextArchiveCopy />} // copy
            onClick={handleCopyToClipboard}
            tooltip="Copy to clipboard"
          />
          <IconButton
            key="paste"
            icon={<GIPasteClipboard />}
            onClick={handlePasteToEditor}
            tooltip="Paste to editor"
          />
        </ButtonGroup>
      }
    />
  );
};
