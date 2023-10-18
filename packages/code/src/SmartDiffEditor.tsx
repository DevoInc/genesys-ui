import * as React from 'react';
import { useTheme } from 'styled-components';

import { ActionsContainer } from './components/Actions';
import { Container } from './components/Container/Container';
import { DiffEditor, type DiffEditorProps } from './components';
import { getTheme } from './themes';

export interface SmartDiffEditorProps extends Omit<DiffEditorProps, 'theme'> {
  /**
   * Array of actions to be added to the editor
   */
  actions?: React.ReactNode;
}

export const InternalSmartDiffEditor: React.FC<SmartDiffEditorProps> = ({
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
  return (
    <Container bordered={bordered}>
      <DiffEditor
        originalValue={originalValue}
        modifiedValue={modifiedValue}
        theme={getTheme(theme)}
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

export const SmartDiffEditor =
  InternalSmartDiffEditor as typeof InternalSmartDiffEditor & {
    Container: typeof Container;
    Editor: typeof DiffEditor;
    ActionsContainer: typeof ActionsContainer;
  };

SmartDiffEditor.Container = Container;
SmartDiffEditor.Editor = DiffEditor;
SmartDiffEditor.ActionsContainer = ActionsContainer;

InternalSmartDiffEditor.displayName = 'SmartDiffEditor';
Container.displayName = 'SmartDiffEditor.Container';
DiffEditor.displayName = 'SmartDiffEditor.Editor';
ActionsContainer.displayName = 'SmartDiffEditor.ActionsContainer';
