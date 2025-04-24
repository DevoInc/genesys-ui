import * as React from 'react';
import { useEditor } from '../../hooks';
import { StyledInternalEditor } from './StyledInternalEditor';
import type { IEditor } from '../../declarations';

export interface InternalEditorProps extends IEditor {}

export const InternalEditor: React.FC<InternalEditorProps> = ({
  width = '100%',
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
  ...restNativeProps
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
      {...restNativeProps}
      ref={containerRef}
      $height={height}
      $width={width}
      $bordered={bordered}
      lineNumbers={options?.lineNumbers}
      readOnly={options?.readOnly}
      $minimap={!!options?.minimap?.enabled}
    />
  );
};
