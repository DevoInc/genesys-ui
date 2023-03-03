import * as React from 'react';

import {
  Field,
  FieldProps,
  GlobalAriaProps,
  Select2Control,
  Select2ControlProps,
} from '@devoinc/genesys-ui';

export interface Select2Props
  extends Omit<FieldProps, 'children'>,
    Omit<Select2ControlProps, 'id' | 'size' | 'aria-label'>,
    // native
    // TODO: add the rest
    GlobalAriaProps {}

export const Select2: React.FC<Select2Props> = ({
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
  // SELECT2 ----------------------------------
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
    <Select2Control
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
