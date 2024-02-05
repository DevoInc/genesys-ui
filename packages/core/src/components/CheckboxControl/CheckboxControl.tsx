import * as React from 'react';

import {
  FieldSize,
  FieldControlCommonProps,
  CheckAttrProps,
  CheckAriaProps,
  InputAttrProps,
  WithRequiredAriaLabelOrAriaLabelledByProps,
} from '../../declarations';

import {
  StyledCheckboxControl,
  StyledCheckboxControlProps,
} from './StyledCheckboxControl';

interface CommonCheckboxControlProps
  extends FieldControlCommonProps,
    CheckAttrProps,
    CheckAriaProps,
    Pick<InputAttrProps, 'value'>,
    Omit<StyledCheckboxControlProps, '$size'> {
  /** The size for the checkbox. It affects to its width, height, font-size... etc. */
  size?: FieldSize;
}

export type CheckboxControlProps =
  WithRequiredAriaLabelOrAriaLabelledByProps<CommonCheckboxControlProps>;

export const CheckboxControl: React.FC<CheckboxControlProps> = ({
  'aria-checked': ariaChecked,
  'aria-errormessage': ariaErrorMessage,
  'aria-invalid': ariaInvalid,
  checked,
  indeterminate,
  onChange,
  size = 'md',
  status = 'base',
  styles,
  tooltip,
  ...restNativeProps
}) => {
  return (
    <StyledCheckboxControl
      {...restNativeProps}
      onChange={onChange}
      aria-checked={ariaChecked ?? indeterminate ? 'mixed' : checked}
      aria-errormessage={status === 'error' ? ariaErrorMessage : undefined}
      aria-invalid={ariaInvalid ?? (status === 'error' ? true : undefined)}
      checked={onChange ? checked : undefined}
      css={styles}
      indeterminate={indeterminate}
      $size={size}
      status={status}
      title={tooltip}
    />
  );
};
