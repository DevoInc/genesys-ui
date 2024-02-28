import * as React from 'react';
import type {
  CheckAttrProps,
  FieldControlCommonProps,
  FieldSize,
  FieldStatus,
  InputAttrProps,
} from '../../declarations';

export interface BaseSwitchControlProps
  extends FieldControlCommonProps,
    Pick<InputAttrProps, 'autoFocus' | 'defaultValue' | 'value'>,
    CheckAttrProps {
  /** Optional content to be included inside the switch track when it's checked */
  checkedContent?: React.ReactNode;
  /** Pre-defined sizes to define padding, height, font-size... etc. */
  size?: FieldSize;
  /** It defines the status color scheme */
  status?: FieldStatus;
  /** Optional content to be included inside the switch track when it's unchecked */
  uncheckedContent?: React.ReactNode;
}
