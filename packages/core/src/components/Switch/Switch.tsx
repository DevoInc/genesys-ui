import * as React from 'react';

import { Field, FieldProps } from '../Field';
import { SwitchControl, type SwitchControlProps } from '../SwitchControl';

export interface SwitchProps
  extends Omit<
      FieldProps,
      'children' | 'hasWideControl' | 'role' | 'subcomponentStyles'
    >,
    Omit<
      SwitchControlProps,
      'id' | 'size' | 'status' | 'disabled' | 'required'
    > {}

export const Switch: React.FC<SwitchProps> = ({
  'aria-label': ariaLabel,
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
  requiredMarkTooltip,
  size = 'md',
  status = 'base',
  styles,
  tooltip,
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
      requiredMarkTooltip={requiredMarkTooltip}
      size={size}
      status={status}
      styles={styles}
      tooltip={tooltip}
    >
      <SwitchControl {...restSwitchControlProps} aria-label={ariaLabel} />
    </Field>
  );
};
