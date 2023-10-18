import * as React from 'react';
import {
  StyledSmartEditor,
  type StyledSmartEditorProps,
} from './StyledSmartEditor';
import { type UseEditorParams, useEditor } from '../../hooks';

export interface EditorProps
  extends UseEditorParams,
    Pick<StyledSmartEditorProps, 'bordered'> {
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
}

export const Editor: React.FC<EditorProps> = ({
  width = 'auto',
  height = '100%',
  bordered,
  value,
  theme,
  language,
  beforeMount,
  onMount,
  onChange,
  onValidate,
  options,
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
      lineNumbers={options?.lineNumbers}
      readOnly={options?.readOnly}
      minimap={!!options?.minimap?.enabled}
    />
  );
};
