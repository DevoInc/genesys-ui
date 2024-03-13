import * as React from 'react';
import type {
  ICheckAttrs,
  IFieldControl,
  TFieldSize,
  TFieldStatus,
  IInputAttrs,
} from '../../declarations';

export interface BaseSwitchControlProps
  extends IFieldControl,
    Pick<IInputAttrs, 'autoFocus' | 'defaultValue' | 'value'>,
    ICheckAttrs {
  /** Optional content to be included inside the switch track when it's checked */
  checkedContent?: React.ReactNode;
  /** Pre-defined sizes to define padding, height, font-size... etc. */
  size?: TFieldSize;
  /** It defines the status color scheme */
  status?: TFieldStatus;
  /** Optional content to be included inside the switch track when it's unchecked */
  uncheckedContent?: React.ReactNode;
}
