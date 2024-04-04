import * as React from 'react';

import { IField } from '../Field/declarations';
import { Field } from '../Field';
import { TextareaControl, type TextareaControlProps } from '../TextareaControl';

export interface TextareaProps
  extends Omit<IField, 'children' | 'role'>,
    Omit<
      TextareaControlProps,
      'id' | 'size' | 'status' | 'disabled' | 'required'
    > {}

export const Textarea: React.FC<TextareaProps> = ({
  'aria-label': ariaLabel,
  disabled,
  hasFloatingHelper,
  helper,
  hideLabel,
  id,
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
  ...restNativeTextareaProps
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
    requiredMarkTooltip={requiredMarkTooltip}
    size={size}
    status={status}
    styles={styles}
    tooltip={tooltip}
  >
    <TextareaControl {...restNativeTextareaProps} aria-label={ariaLabel} />
  </Field>
);
