import * as React from 'react';
import {
  StyledInternalEditor,
  type StyledInternalEditorProps,
} from './StyledInternalEditor';
import { useEditor } from '../../hooks';
import { IUseEditorParams } from '../../hooks/editor/declarations';

export interface InternalEditorProps
  extends IUseEditorParams,
    Pick<StyledInternalEditorProps, 'bordered'> {
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

export const InternalEditor: React.FC<InternalEditorProps> = ({
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
    <StyledInternalEditor
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
