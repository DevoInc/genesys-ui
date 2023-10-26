import * as React from 'react';
import { useTheme } from 'styled-components';

import { Container } from '../Editor/components/Container/Container';
import {
  InternalDiffEditor,
  type InternalDiffEditorProps,
} from './components/InternalDiffEditor/InternalDiffEditor';
import { ActionsContainer } from './components';
import { useDiffEditorTheme } from './hooks';

export interface DiffEditorProps
  extends Omit<InternalDiffEditorProps, 'theme'> {
  /**
   * Array of actions to be added to the editor
   */
  actions?: React.ReactNode;
}

const BaseDiffEditor: React.FC<DiffEditorProps> = ({
  originalValue = '',
  modifiedValue = '',
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
}) => {
  const theme = useTheme();
  const editorTheme = useDiffEditorTheme(theme);
  return (
    <Container bordered={bordered}>
      <InternalDiffEditor
        bordered={bordered}
        originalValue={originalValue}
        modifiedValue={modifiedValue}
        theme={editorTheme}
        language={language}
        height={height}
        width={width}
        beforeMount={beforeMount}
        onMount={onMount}
        onChange={onChange}
        onValidate={onValidate}
        options={options}
      />
      <ActionsContainer>{actions}</ActionsContainer>
    </Container>
  );
};

export const DiffEditor = BaseDiffEditor as typeof BaseDiffEditor & {
  Container: typeof Container;
  Editor: typeof InternalDiffEditor;
  ActionsContainer: typeof ActionsContainer;
};

DiffEditor.Container = Container;
DiffEditor.Editor = InternalDiffEditor;
DiffEditor.ActionsContainer = ActionsContainer;

InternalDiffEditor.displayName = 'DiffEditor';
Container.displayName = 'DiffEditor.Container';
DiffEditor.displayName = 'DiffEditor.Editor';
ActionsContainer.displayName = 'DiffEditor.ActionsContainer';
