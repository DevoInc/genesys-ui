import * as React from 'react';
import type * as monaco from 'monaco-editor-core';

import { Button, ButtonGroup, Flex } from '@devoinc/genesys-ui';
import { DiffEditor, type DiffEditorProps } from '../../DiffEditor';

const value = "Help! I'm being updated programatically";

export const Programatic = ({ ...props }: Partial<DiffEditorProps>) => {
  const editorRef = React.useRef<monaco.editor.IStandaloneDiffEditor>();

  const handleEditorMount = (editor: monaco.editor.IStandaloneDiffEditor) =>
    (editorRef.current = editor);

  const focusEditor = () => editorRef.current?.focus();

  const updateValue = () => {
    const rightEditor = editorRef.current?.getModifiedEditor();
    const val = rightEditor.getValue();
    rightEditor.setValue(val + '\n' + value);
  };

  return (
    <Flex
      width="100%"
      flexDirection="column"
      gap="cmp-md"
      alignItems="flex-start"
    >
      <ButtonGroup>
        <Button onClick={focusEditor}>Focus right editor</Button>
        <Button onClick={updateValue}>Update right value</Button>
      </ButtonGroup>
      <DiffEditor
        {...props}
        height="300px"
        width="100%"
        originalValue={value}
        modifiedValue={value.repeat(2)}
        onMount={handleEditorMount}
      />
    </Flex>
  );
};
