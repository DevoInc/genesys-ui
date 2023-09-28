import * as React from 'react';

import { useEditor, type UseEditorParams } from './hooks';
import { StyledSmartEditor } from './styled/StyledSmartEditor';
import { ActionsContainer } from './components/Actions';

export interface SmartEditorProps extends UseEditorParams {
  /**
   * Width of the editor wrapper
   */
  width?: number | string;
  /**
   * Height of the editor wrapper
   */
  height?: number | string;
  /**
   * Add border to the editor wrapper
   */
  bordered?: boolean;
  /**
   * Array of actions to be added to the editor
   */
  actions?: React.ReactNode;
}

export const InternalSmartEditor: React.FC<SmartEditorProps> = ({
  value = '',
  theme,
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
  const { containerRef } = useEditor({
    value,
    theme,
    language,
    beforeMount,
    onMount,
    onChange,
    onValidate,
    options,
  });

  return (
    <StyledSmartEditor
      ref={containerRef}
      $height={height}
      $width={width}
      bordered={bordered}
      lineNumbers={options.lineNumbers}
      readOnly={options.readOnly}
    >
      {actions}
    </StyledSmartEditor>
  );
};

export const SmartEditor = InternalSmartEditor as typeof InternalSmartEditor & {
  ActionsContainer: typeof ActionsContainer;
};

SmartEditor.ActionsContainer = ActionsContainer;

InternalSmartEditor.displayName = 'SmartEditor';
ActionsContainer.displayName = 'SmartEditor.ActionsContainer';
