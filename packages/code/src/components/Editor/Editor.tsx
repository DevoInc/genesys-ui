import * as React from 'react';
import type { IDataAttrs } from '@devoinc/genesys-ui';

import { useEditorTheme } from './hooks';
import { ActionsContainer, ActionsContainerItem } from './components/Actions';
import { Container } from './components/Container/Container';
import { InternalEditor, type InternalEditorProps } from './components';

export interface EditorProps
  extends IDataAttrs,
    Omit<InternalEditorProps, 'theme'> {
  /** Array of actions to be added to the editor. */
  actions?: React.ReactNode | React.ReactNode[];
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
  ...restNativeProps
}) => {
  const editorTheme = useEditorTheme();

  return (
    <Container
      bordered={bordered}
      readOnly={options.readOnly}
      height={height}
      width={width}
    >
      <InternalEditor
        {...restNativeProps}
        value={value}
        theme={editorTheme}
        language={language}
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
  ActionsContainerItem: typeof ActionsContainerItem;
};

Editor.Container = Container;
Editor.Editor = InternalEditor;
Editor.ActionsContainer = ActionsContainer;
Editor.ActionsContainerItem = ActionsContainerItem;

InternalEditor.displayName = 'Editor';
Container.displayName = 'Editor.Container';
InternalEditor.displayName = 'Editor.Editor';
ActionsContainer.displayName = 'Editor.ActionsContainer';
ActionsContainerItem.displayName = 'Editor.ActionsContainerItem';
