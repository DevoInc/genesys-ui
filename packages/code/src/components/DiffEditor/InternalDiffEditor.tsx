import * as React from 'react';
import {
  StyledInternalEditor,
  type StyledInternalEditorProps,
} from '../Editor/components/InternalEditor/StyledInternalEditor';
import { useDiffEditor, type UseDiffEditorParams } from './hooks';

export interface InternalDiffEditorProps
  extends UseDiffEditorParams,
    Pick<StyledInternalEditorProps, 'bordered'> {
  /**
   * Width of the editor wrapper
   */
  width?: number | string;
  /**
   * Height of the editor wrapper
   */
  height?: number | string;
}

export const InternalDiffEditor: React.FC<InternalDiffEditorProps> = ({
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
    <StyledInternalEditor
      bordered={false}
      ref={containerRef}
      $height={height}
      $width={width}
      lineNumbers={options?.lineNumbers}
      readOnly={options?.readOnly}
    />
  );
};
