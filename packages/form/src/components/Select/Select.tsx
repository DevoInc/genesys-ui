import * as React from 'react';

import {
  Field,
  FieldProps,
  GlobalAriaProps,
  SelectControl,
  SelectControlProps,
} from '@devoinc/genesys-ui';

export interface SelectProps
  extends Omit<FieldProps, 'children'>,
    Omit<SelectControlProps, 'id' | 'size' | 'aria-label'>,
    // native
    // TODO: add the rest
    GlobalAriaProps {}

export const Select: React.FC<SelectProps> = ({
  // COMMON ---------------------------------
  'aria-describedby': ariaDescribedBy,
  'aria-errormessage': ariaErrorMessage,
  'aria-invalid': ariaInvalid,
  disabled,
  id,
  required,
  size = 'md',
  status = 'base',
  // FIELD ----------------------------------
  hasFloatingHelper,
  helper,
  hideLabel,
  label,
  labelPosition = 'top',
  // SELECT ----------------------------------
  ...props
}) => (
  <Field
    // Common
    aria-invalid={ariaInvalid}
    aria-describedby={ariaDescribedBy}
    aria-errormessage={ariaErrorMessage}
    disabled={disabled}
    status={status}
    id={id}
    required={required}
    size={size}
    // FieldProps
    hasFloatingHelper={hasFloatingHelper}
    helper={helper}
    hideLabel={hideLabel}
    label={label}
    labelPosition={labelPosition}
  >
    <SelectControl
      // Common
      aria-invalid={ariaInvalid}
      aria-describedby={ariaDescribedBy}
      aria-errormessage={ariaErrorMessage}
      status={status}
      id={id}
      required={required}
      size={size}
      // Select
      {...props}
    />
  </Field>
);