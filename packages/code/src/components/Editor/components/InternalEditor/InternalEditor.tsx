import * as React from 'react';
import type { IDataAttrs } from '@devoinc/genesys-ui';

import type { IUseEditor } from '../../hooks/editor/declarations';
import { useEditor } from '../../hooks';
import { StyledInternalEditor } from './StyledInternalEditor';

export interface InternalEditorProps extends IDataAttrs, IUseEditor {
  /** Width of the editor wrapper */
  width?: number | string;
  /** Height of the editor wrapper */
  height?: number | string;
  /** Add border to the editor wrapper */
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
  ...restDataProps
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
      {...restDataProps}
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
