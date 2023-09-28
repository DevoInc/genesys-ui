import * as React from 'react';
import { saveAs } from 'file-saver';
import { useTheme } from 'styled-components';

import { SmartEditor, SmartEditorProps, getTheme, monaco } from '../../';

export const Shortcuts = ({ ...props }: Partial<SmartEditorProps>) => {
  const theme = useTheme();

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
      theme={getTheme(theme)}
      value={'Press Ctrl/Cmd + E to export this content to a file\n'}
      onMount={registerShortcuts}
    />
  );
};
