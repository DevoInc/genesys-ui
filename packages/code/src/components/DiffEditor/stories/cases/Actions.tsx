import * as React from 'react';
import type * as monaco from 'monaco-editor-core';

import { IconButton, ButtonGroup } from '@devoinc/genesys-ui';
import { DiffEditor, type DiffEditorProps } from '../../DiffEditor';
import {
  GIDocumentsFilesPaperTextArchiveCopy,
  GIPasteClipboard,
} from '@devoinc/genesys-icons';

export const Actions = ({ ...props }: Partial<DiffEditorProps>) => {
  const editorRef = React.useRef<monaco.editor.IStandaloneDiffEditor>();

  const handleEditorDidMount = (
    editor: monaco.editor.IStandaloneDiffEditor,
  ) => {
    editorRef.current = editor;
  };

  const handleCopyToClipboard = () => {
    const value = editorRef.current.getModifiedEditor().getValue();
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
        const currentEditor = editorRef.current.getModifiedEditor();
        currentEditor.setValue(currentEditor.getValue().concat(value));
      })
      .catch((err) => console.error('Failed to paste from clipboard', err));
  };

  return (
    <DiffEditor
      {...props}
      height="300px"
      bordered={true}
      originalValue={'Click to copy the right side!\n'}
      modifiedValue={'Copy me!\n'}
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
