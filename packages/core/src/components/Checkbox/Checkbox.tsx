import * as React from 'react';

import type { IDataAttrs } from '../../declarations';
import { Field, type FieldProps } from '../Field';
import { CheckboxControl, type CheckboxControlProps } from '../CheckboxControl';

export interface CheckboxProps
  extends IDataAttrs,
    Omit<
      FieldProps,
      | 'children'
      | 'controlWidth'
      | 'direction'
      | 'hasWideControl'
      | 'labelPosition'
      | 'role'
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
    <CheckboxControl
      {...restNativeInputProps}
      aria-labelledby={ariaLabelledBy}
      disabled={disabled}
      required={required}
    />
  </Field>
);
