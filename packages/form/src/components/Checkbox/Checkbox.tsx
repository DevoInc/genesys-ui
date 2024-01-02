import * as React from 'react';

import {
  CheckboxControl,
  CheckboxControlProps,
  Field,
  FieldProps,
} from '@devoinc/genesys-ui';

export interface CheckboxProps
  extends Omit<
      FieldProps,
      'children' | 'hasWideControl' | 'labelPosition' | 'role'
    >,
    Omit<
      CheckboxControlProps,
      'id' | 'size' | 'status' | 'disabled' | 'required' | 'aria-label'
    > {}

export const Checkbox: React.FC<CheckboxProps> = ({
  'aria-labelledby': ariaLabelledBy,
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
  requiredMarkTooltip,
  size = 'md',
  status = 'base',
  styles,
  tooltip,
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
    requiredMarkTooltip={requiredMarkTooltip}
    size={size}
    status={status}
    styles={styles}
    tooltip={tooltip}
  >
    <CheckboxControl
      {...restNativeInputProps}
      aria-labelledby={ariaLabelledBy}
      disabled={disabled}
      id={id}
      required={required}
      size={size}
      status={status}
    />
  </Field>
);
