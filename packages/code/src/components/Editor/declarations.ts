import * as React from 'react';
import type { IDataAttrs, IGlobalAriaAttrs } from '@devoinc/genesys-ui';
import type { IUseEditor } from './hooks/editor/declarations';

export interface IEditor extends IDataAttrs, IGlobalAriaAttrs, IUseEditor {
  /** Width of the editor wrapper */
  width?: React.CSSProperties['width'];
  /** Height of the editor wrapper */
  height?: React.CSSProperties['height'];
  /** Add border to the editor wrapper */
  bordered?: boolean;
}
