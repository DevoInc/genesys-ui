import * as React from 'react';

import { hasStatus } from '../../utils/validations';
import { Field, type FieldProps } from '../Field';
import { InputControl, type InputControlProps } from '../InputControl';

export interface InputProps
  extends Omit<FieldProps, 'children' | 'role'>,
    Omit<
      InputControlProps,
      'id' | 'size' | 'status' | 'disabled' | 'required'
    > {}

export const Input: React.FC<InputProps> = ({
  'aria-label': ariaLabel,
  disabled,
  hasFloatingHelper,
  helper,
  hideLabel,
  id,
  icon,
  inputWidth,
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
  requiredMarkTooltip,
  size = 'md',
  status = 'base',
  styles,
  tooltip,
  type = 'text',
  ...restNativeInputProps
}) => (
  <Field
    disabled={disabled}
    controlWidth={inputWidth}
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
    requiredMarkTooltip={requiredMarkTooltip}
    size={size}
    status={status}
    styles={styles}
    tooltip={tooltip}
  >
    <InputControl
      {...restNativeInputProps}
      hideStatusIcon={helper && hasStatus(status)}
      aria-label={ariaLabel}
      icon={helper && hasStatus(status) ? undefined : icon}
      type={type}
    />
  </Field>
);
