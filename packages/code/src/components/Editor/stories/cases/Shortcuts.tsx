import * as React from 'react';
import { saveAs } from 'file-saver';
import * as monaco from 'monaco-editor-core';

import { Editor, type EditorProps } from '../../Editor';

export const Shortcuts = ({ ...props }: Partial<EditorProps>) => {
  const registerShortcuts = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyE, () => {
      const blob = new Blob([editor.getValue()], {
        type: 'text/plain;charset=utf-8',
      });
      saveAs(blob, 'code.txt');
    });
  };

  return (
    <Editor
      {...props}
      value={'Press Ctrl/Cmd + E to export this content to a file\n'}
      onMount={registerShortcuts}
    />
  );
};
