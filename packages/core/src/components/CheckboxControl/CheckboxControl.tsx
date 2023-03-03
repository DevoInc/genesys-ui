import * as React from 'react';

import {
  FieldSize,
  FieldControlCommonProps,
  CheckAttrProps,
  CheckAriaProps,
  InputAttrProps,
} from '../../declarations';

import {
  StyledCheckboxControl,
  StyledCheckboxControlProps,
} from './StyledCheckboxControl';

export interface CheckboxControlProps
  extends FieldControlCommonProps,
    CheckAttrProps,
    CheckAriaProps,
    Pick<InputAttrProps, 'value'>,
    Omit<StyledCheckboxControlProps, '$size'> {
  /** The size for the checkbox. It affects to its width, height, font-size... etc. */
  size?: FieldSize;
}

export const CheckboxControl: React.FC<CheckboxControlProps> = ({
  'aria-checked': ariaChecked,
  'aria-errormessage': ariaErrorMessage,
  'aria-invalid': ariaInvalid,
  checked,
  indeterminate = false,
  onChange,
  size = 'md',
  status = 'base',
  ...restNativeProps
}) => (
  <StyledCheckboxControl
    {...restNativeProps}
    onChange={onChange}
    aria-checked={ariaChecked ?? (indeterminate && checked) ? 'mixed' : checked}
    aria-errormessage={status === 'error' ? ariaErrorMessage : undefined}
    aria-invalid={ariaInvalid ?? (status === 'error' ? true : undefined)}
    checked={onChange ? checked : undefined}
    indeterminate={indeterminate}
    $size={size}
    status={status}
  />
);
