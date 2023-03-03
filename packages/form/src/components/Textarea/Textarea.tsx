import * as React from 'react';

import {
  Field,
  FieldProps,
  TextareaControl,
  TextareaControlProps,
} from '@devoinc/genesys-ui';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TextareaProps
  extends Omit<FieldProps, 'children' | 'role'>,
    Omit<
      TextareaControlProps,
      'id' | 'size' | 'aria-label' | 'status' | 'disabled' | 'required'
    > {}

export const Textarea: React.FC<TextareaProps> = ({
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
  requiredMarkTitle,
  size = 'md',
  status = 'base',
  title,
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
    requiredMarkTitle={requiredMarkTitle}
    size={size}
    status={status}
    title={title}
  >
    <TextareaControl
      {...restNativeTextareaProps}
      aria-label={label}
      disabled={disabled}
      id={id}
      required={required}
      status={status}
      size={size}
    />
  </Field>
);
