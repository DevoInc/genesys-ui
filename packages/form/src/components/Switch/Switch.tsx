import * as React from 'react';

import { SwitchControl, SwitchControlProps } from '@devoinc/genesys-ui';
import { Field, FieldProps } from '@devoinc/genesys-ui';

export interface SwitchProps
  extends Omit<FieldProps, 'children' | 'hasWideControl' | 'role'>,
    Omit<
      SwitchControlProps,
      'id' | 'size' | 'aria-label' | 'status' | 'disabled' | 'required'
    > {}

export const Switch: React.FC<SwitchProps> = ({
  disabled,
  hasFloatingHelper,
  helper,
  hideLabel,
  id,
  label,
  labelPosition = 'left',
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
  ...restSwitchControlProps
}) => {
  return (
    <Field
      disabled={disabled}
      hasFloatingHelper={hasFloatingHelper}
      hasWideControl={false}
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
      <SwitchControl
        {...restSwitchControlProps}
        aria-label={label}
        disabled={disabled}
        id={id}
        required={required}
        size={size}
        status={status}
      />
    </Field>
  );
};
