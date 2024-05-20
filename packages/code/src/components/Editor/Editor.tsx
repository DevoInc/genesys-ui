import * as React from 'react';
import type { IDataAttrs } from '@devoinc/genesys-ui';

import { useEditorTheme } from './hooks';
import { ActionsContainer } from './components/Actions';
import { Container } from './components/Container/Container';
import { InternalEditor, type InternalEditorProps } from './components';

export interface EditorProps
  extends IDataAttrs,
    Omit<InternalEditorProps, 'theme'> {
  /**
   * Array of actions to be added to the editor
   */
  actions?: React.ReactNode;
}

const BaseEditor: React.FC<EditorProps> = ({
  value = '',
  width = 'auto',
  height = '100%',
  language,
  bordered,
  beforeMount,
  onMount,
  onChange,
  onValidate,
  actions,
  options = {},
  ...restDataProps
}) => {
  const editorTheme = useEditorTheme();

  return (
    <Container bordered={bordered} readOnly={options.readOnly}>
      <InternalEditor
        {...restDataProps}
        value={value}
        theme={editorTheme}
        language={language}
        height={height}
        width={width}
        beforeMount={beforeMount}
        onMount={onMount}
        onChange={onChange}
        onValidate={onValidate}
        options={options}
        bordered={bordered}
      />
      <ActionsContainer>{actions}</ActionsContainer>
    </Container>
  );
};

export const Editor = BaseEditor as typeof BaseEditor & {
  Container: typeof Container;
  Editor: typeof InternalEditor;
  ActionsContainer: typeof ActionsContainer;
};

Editor.Container = Container;
Editor.Editor = InternalEditor;
Editor.ActionsContainer = ActionsContainer;

InternalEditor.displayName = 'Editor';
Container.displayName = 'Editor.Container';
InternalEditor.displayName = 'Editor.Editor';
ActionsContainer.displayName = 'Editor.ActionsContainer';
