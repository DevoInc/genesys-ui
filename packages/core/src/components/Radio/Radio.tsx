import * as React from 'react';

import { Field, type FieldProps } from '../Field';
import { RadioControl, type RadioControlProps } from '../RadioControl';

export interface RadioProps
  extends Omit<
      FieldProps,
      | 'children'
      | 'controlWidth'
      | 'direction'
      | 'hasWideControl'
      | 'labelPosition'
      | 'role'
    >,
    Omit<
      RadioControlProps,
      'id' | 'size' | 'status' | 'disabled' | 'required' | 'aria-label'
    > {}

export const Radio: React.FC<RadioProps> = ({
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
  style,
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
    style={style}
    tooltip={tooltip}
  >
    <RadioControl
      {...restNativeInputProps}
      aria-labelledby={ariaLabelledBy}
      disabled={disabled}
      required={required}
    />
  </Field>
);
