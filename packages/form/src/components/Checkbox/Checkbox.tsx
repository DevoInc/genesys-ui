import * as React from 'react';

import {
  CheckboxControl,
  CheckboxControlProps,
  Field,
  FieldProps,
} from '@devoinc/genesys-ui';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CheckboxProps
  extends Omit<
      FieldProps,
      'children' | 'hasWideControl' | 'labelPosition' | 'role'
    >,
    Omit<
      CheckboxControlProps,
      'id' | 'size' | 'aria-label' | 'status' | 'disabled' | 'required'
    > {}

export const Checkbox: React.FC<CheckboxProps> = ({
  disabled,
  hasFloatingHelper,
  helper,
  hideLabel,
  id,
  label,
  onClick,
  onMouseDown,
  onMouseLeave,
  onMouseMove,
  onMouseOut,
  onMouseOver,
  onMouseUp,
  required,
  requiredMarkTitle,
  size = 'md',
  status = 'base',
  title,
  ...restNativeInputProps
}) => (
  <Field
    disabled={disabled}
    hasFloatingHelper={hasFloatingHelper}
    hasWideControl={false}
    helper={helper}
    hideLabel={hideLabel}
    id={id}
    label={label}
    labelPosition="right"
    onClick={onClick}
    onMouseDown={onMouseDown}
    onMouseLeave={onMouseLeave}
    onMouseMove={onMouseMove}
    onMouseOut={onMouseOut}
    onMouseOver={onMouseOver}
    onMouseUp={onMouseUp}
    required={required}
    requiredMarkTitle={requiredMarkTitle}
    size={size}
    status={status}
    title={title}
  >
    <CheckboxControl
      {...restNativeInputProps}
      aria-label={label}
      disabled={disabled}
      id={id}
      required={required}
      size={size}
      status={status}
    />
  </Field>
);
