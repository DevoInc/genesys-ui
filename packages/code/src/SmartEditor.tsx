import * as React from 'react';
import { useTheme } from 'styled-components';

import { ActionsContainer } from './components/Actions';
import { Container } from './components/Container/Container';
import { Editor, EditorProps } from './components';
import { getTheme } from './themes';

export interface SmartEditorProps extends Omit<EditorProps, 'theme'> {
  /**
   * Array of actions to be added to the editor
   */
  actions?: React.ReactNode;
}

export const InternalSmartEditor: React.FC<SmartEditorProps> = ({
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
}) => {
  const theme = useTheme();
  return (
    <Container>
      <Editor
        value={value}
        theme={getTheme(theme)}
        language={language}
        height={height}
        width={width}
        bordered={bordered}
        beforeMount={beforeMount}
        onMount={onMount}
        onChange={onChange}
        onValidate={onValidate}
        options={options}
      />
      {actions}
    </Container>
  );
};

export const SmartEditor = InternalSmartEditor as typeof InternalSmartEditor & {
  Container: typeof Container;
  Editor: typeof Editor;
  ActionsContainer: typeof ActionsContainer;
};

SmartEditor.Container = Container;
SmartEditor.Editor = Editor;
SmartEditor.ActionsContainer = ActionsContainer;

InternalSmartEditor.displayName = 'SmartEditor';
Container.displayName = 'SmartEditor.Container';
Editor.displayName = 'SmartEditor.Editor';
ActionsContainer.displayName = 'SmartEditor.ActionsContainer';
