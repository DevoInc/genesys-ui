import * as React from 'react';

import {
  CheckAriaProps,
  CheckAttrProps,
  FieldControlCommonProps,
  FieldSize,
  InputAttrProps,
  WithRequiredAriaLabelOrAriaLabelledByProps,
} from '../../declarations';

import {
  StyledRadioControl,
  StyledRadioControlProps,
} from './StyledRadioControl';

interface CommonRadioControlProps
  extends FieldControlCommonProps,
    CheckAttrProps,
    CheckAriaProps,
    Pick<InputAttrProps, 'value'>,
    Omit<StyledRadioControlProps, '$size'> {
  /** The size for the radio. It affects to its width, height, font-size... etc. */
  size?: FieldSize;
}

export type RadioControlProps =
  WithRequiredAriaLabelOrAriaLabelledByProps<CommonRadioControlProps>;

export const RadioControl: React.FC<RadioControlProps> = ({
  'aria-errormessage': ariaErrorMessage,
  'aria-invalid': ariaInvalid,
  checked,
  onChange,
  size = 'md',
  status = 'base',
  styles,
  tooltip,
  ...restNativeProps
}) => (
  <StyledRadioControl
    {...restNativeProps}
    aria-errormessage={status === 'error' ? ariaErrorMessage : undefined}
    aria-invalid={ariaInvalid ?? (status === 'error' ? true : undefined)}
    checked={onChange ? checked : undefined}
    css={styles}
    onChange={onChange}
    $size={size}
    title={tooltip}
    status={status}
  />
);
