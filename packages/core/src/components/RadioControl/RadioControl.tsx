import * as React from 'react';

import {
  CheckAriaProps,
  CheckAttrProps,
  FieldControlCommonProps,
  FieldSize,
  InputAttrProps,
} from '../../declarations';

import {
  StyledRadioControl,
  StyledRadioControlProps,
} from './StyledRadioControl';

export interface RadioControlProps
  extends FieldControlCommonProps,
    CheckAttrProps,
    CheckAriaProps,
    Pick<InputAttrProps, 'value'>,
    Omit<StyledRadioControlProps, '$size'> {
  /** The size for the radio. It affects to its width, height, font-size... etc. */
  size?: FieldSize;
}

export const RadioControl: React.FC<RadioControlProps> = ({
  'aria-errormessage': ariaErrorMessage,
  'aria-invalid': ariaInvalid,
  checked,
  onChange,
  size = 'md',
  status = 'base',
  ...restNativeProps
}) => (
  <StyledRadioControl
    {...restNativeProps}
    onChange={onChange}
    aria-errormessage={status === 'error' ? ariaErrorMessage : undefined}
    aria-invalid={ariaInvalid ?? (status === 'error' ? true : undefined)}
    checked={onChange ? checked : undefined}
    $size={size}
    status={status}
  />
);
