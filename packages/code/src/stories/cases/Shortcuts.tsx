import * as React from 'react';
import { saveAs } from 'file-saver';

import { SmartEditor, SmartEditorProps, monaco } from '../../';

export const Shortcuts = ({ ...props }: Partial<SmartEditorProps>) => {
  const registerShortcuts = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyE, () => {
      const blob = new Blob([editor.getValue()], {
        type: 'text/plain;charset=utf-8',
      });
      saveAs(blob, 'code.txt');
    });
  };

  return (
    <SmartEditor
      {...props}
      value={'Press Ctrl/Cmd + E to export this content to a file\n'}
      onMount={registerShortcuts}
    />
  );
};
