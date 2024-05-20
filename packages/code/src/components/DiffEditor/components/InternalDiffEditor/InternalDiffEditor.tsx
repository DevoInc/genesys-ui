import * as React from 'react';
import type { IDataAttrs } from '@devoinc/genesys-ui';
import { useDiffEditor, type IUseDiffEditor } from '../../hooks';
import {
  StyledInternalDiffEditor,
  type StyledInternalDiffEditorProps,
} from './StyledInternalDiffEditor';

export interface InternalDiffEditorProps
  extends IDataAttrs,
    IUseDiffEditor,
    Pick<StyledInternalDiffEditorProps, 'bordered'> {
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
  bordered,
  originalValue,
  modifiedValue,
  theme,
  language,
  beforeMount,
  onMount,
  onChange,
  onValidate,
  options,
  ...restDataProps
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
    <StyledInternalDiffEditor
      {...restDataProps}
      originalEditable={options?.originalEditable}
      bordered={bordered}
      ref={containerRef}
      $height={height}
      $width={width}
      lineNumbers={options?.lineNumbers}
      readOnly={options?.readOnly}
    />
  );
};
