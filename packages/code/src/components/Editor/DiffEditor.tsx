import * as React from 'react';
import {
  StyledSmartEditor,
  type StyledSmartEditorProps,
} from './StyledSmartEditor';
import { useDiffEditor, type UseDiffEditorParams } from '../../hooks';

export interface DiffEditorProps
  extends UseDiffEditorParams,
    Pick<StyledSmartEditorProps, 'bordered'> {
  /**
   * Width of the editor wrapper
   */
  width?: number | string;
  /**
   * Height of the editor wrapper
   */
  height?: number | string;
}

export const DiffEditor: React.FC<DiffEditorProps> = ({
  width = 'auto',
  height = '100%',
  originalValue,
  modifiedValue,
  theme,
  language,
  beforeMount,
  onMount,
  onChange,
  onValidate,
  options,
}) => {
  const { containerRef } = useDiffEditor({
    originalValue,
    modifiedValue,
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
      bordered={false}
      ref={containerRef}
      $height={height}
      $width={width}
      lineNumbers={options?.lineNumbers}
      readOnly={options?.readOnly}
    />
  );
};
