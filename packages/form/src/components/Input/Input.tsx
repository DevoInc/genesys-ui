import * as React from 'react';

import {
  Field,
  FieldProps,
  InputControl,
  InputControlProps,
} from '@devoinc/genesys-ui';
import { hasStatus } from '../../utils/validations';

export interface InputProps
  extends Omit<FieldProps, 'children' | 'role'>,
    Omit<
      InputControlProps,
      'id' | 'size' | 'aria-label' | 'status' | 'disabled' | 'required'
    > {
  /** Name of the Icon from icon library font to be included in the input control. */
  inputControlIcon?: string;
}

export const Input: React.FC<InputProps> = ({
  disabled,
  hasFloatingHelper,
  helper,
  hideLabel,
  id,
  inputControlIcon,
  label,
  labelPosition = 'top',
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
  type = 'text',
  ...restNativeInputProps
}) => (
  <Field
    disabled={disabled}
    hasFloatingHelper={hasFloatingHelper}
    helper={helper}
    hideLabel={hideLabel}
    id={id}
    label={label}
    labelPosition={labelPosition}
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
    <InputControl
      {...restNativeInputProps}
      aria-label={label}
      disabled={disabled}
      icon={helper && hasStatus(status) ? undefined : inputControlIcon}
      id={id}
      required={required}
      size={size}
      status={status}
      type={type}
    />
  </Field>
);
