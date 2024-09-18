import * as React from 'react';

import { Field, type FieldProps } from '../Field';
import {
  SelectControl,
  type SelectControlProps,
  type TSelectOption,
} from '../SelectControl';

export interface ExtendedTSelectOption extends TSelectOption {
  isDisabled?: boolean;
}

export interface SelectProps
  extends Omit<FieldProps, 'children'>,
    Omit<
      SelectControlProps<ExtendedTSelectOption>,
      'id' | 'size' | 'status' | 'required'
    > {}

export const Select: React.FC<SelectProps> = ({
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  'aria-errormessage': ariaErrorMessage,
  'aria-invalid': ariaInvalid,
  disabled,
  id,
  required,
  size = 'md',
  status = 'base',
  hasFloatingHelper,
  helper,
  hideLabel,
  label,
  labelPosition = 'top',
  style,
  tooltip,
  ...props
}) => (
  <Field
    aria-describedby={ariaDescribedBy}
    aria-errormessage={ariaErrorMessage}
    aria-invalid={ariaInvalid}
    disabled={disabled}
    hasFloatingHelper={hasFloatingHelper}
    helper={helper}
    hideLabel={hideLabel}
    id={id}
    label={label}
    labelPosition={labelPosition}
    required={required}
    size={size}
    status={status}
    style={style}
    tooltip={tooltip}
  >
    <SelectControl
      aria-label={ariaLabel}
      aria-invalid={ariaInvalid}
      {...props}
    />
  </Field>
);
