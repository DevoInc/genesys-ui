import * as React from 'react';
import { saveAs } from 'file-saver';
import * as monaco from 'monaco-editor-core';
import { DiffEditor, type DiffEditorProps } from '../../DiffEditor';

export const Shortcuts = ({ ...props }: Partial<DiffEditorProps>) => {
  const registerShortcuts = (editor: monaco.editor.IStandaloneDiffEditor) => {
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_E, () => {
      const blob = new Blob([editor.getModifiedEditor().getValue()], {
        type: 'text/plain;charset=utf-8',
      });
      saveAs(blob, 'code.txt');
    });
  };

  return (
    <DiffEditor
      {...props}
      originalValue={'Nothing here\n'}
      modifiedValue={'Press Ctrl/Cmd + E to export this content to a file\n'}
      onMount={registerShortcuts}
    />
  );
};
