import * as React from 'react';
import type * as monaco from 'monaco-editor-core';

import { Button, ButtonGroup, Flex } from '@devoinc/genesys-ui';
import { SmartEditor, type SmartEditorProps } from '../../';

export const Programatic = ({ ...props }: Partial<SmartEditorProps>) => {
  const [value, setValue] = React.useState<string>(
    "Help! I'm being updated programatically",
  );
  const editorRef = React.useRef<monaco.editor.IStandaloneCodeEditor>();

  const handleEditorMount = (editor) => (editorRef.current = editor);

  const focusEditor = () => editorRef.current?.focus();
  const updateValue = () => {
    const value = editorRef.current?.getValue();
    setValue(value + "\nHelp! I'm being updated programatically");
  };

  return (
    <Flex
      width="100%"
      flexDirection="column"
      gap="cmp-md"
      alignItems="flex-start"
    >
      <ButtonGroup>
        <Button onClick={focusEditor}>Focus editor</Button>
        <Button onClick={updateValue}>Update value</Button>
      </ButtonGroup>
      <SmartEditor
        {...props}
        height="300px"
        width="100%"
        value={value}
        onMount={handleEditorMount}
      />
    </Flex>
  );
};
