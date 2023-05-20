import * as React from 'react';
import { useTheme } from 'styled-components';

import {
  CheckAttrProps,
  FieldControlCommonProps,
  FieldSize,
  FieldStatus,
  InputAttrProps,
} from '../../declarations';

import { getPxFromRem } from '../../styled/functions';

import {
  SwitchControlContainer,
  SwitchControlHandle,
  SwitchControlInput,
  SwitchControlText,
} from './components';

export interface SwitchControlProps
  extends FieldControlCommonProps,
    Pick<InputAttrProps, 'defaultValue' | 'value'>,
    CheckAttrProps {
  /** Optional content to be included inside the switch track when it's checked */
  checkedContent?: React.ReactNode;
  /** Pre-defined sizes to define padding, height, font-size... etc. */
  size?: FieldSize;
  /** It defines the status color scheme */
  status?: FieldStatus;
  /** Optional content to be included inside the switch track when it's unchecked */
  uncheckedContent?: React.ReactNode;
}

export const InternalSwitchControl: React.FC<SwitchControlProps> = ({
  'aria-errormessage': ariaErrorMessage,
  'aria-invalid': ariaInvalid,
  checked,
  checkedContent,
  disabled = false,
  id,
  onChange,
  onClick,
  onMouseDown,
  onMouseLeave,
  onMouseMove,
  onMouseOut,
  onMouseOver,
  onMouseUp,
  size = 'md',
  status = 'base',
  tooltip,
  uncheckedContent,
  ...restNativeProps
}) => {
  const tokens = useTheme();
  const switchTokens = tokens.cmp.switchControl;
  const trackTokens = switchTokens.track;
  const handlerTokens = switchTokens.handler;
  const handleDiameter = getPxFromRem(handlerTokens.size.square[size]);
  const switchHeight = getPxFromRem(trackTokens.size.height[size]);

  return (
    <SwitchControlContainer
      disabled={disabled}
      checked={checked}
      heightPx={switchHeight}
      handleDiameter={handleDiameter}
      id={id}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      onMouseUp={onMouseUp}
      size={size}
      status={status}
      tooltip={tooltip}
    >
      <SwitchControlInput
        {...restNativeProps}
        aria-errormessage={status === 'error' ? ariaErrorMessage : undefined}
        aria-invalid={ariaInvalid ?? (status === 'error' ? true : undefined)}
        checked={onChange ? checked : undefined}
        disabled={disabled}
        id={`${id}-switch-input`}
        onChange={onChange}
        role="switch"
        type="checkbox"
      />
      <SwitchControlText
        checked={checked}
        checkedContent={checkedContent}
        uncheckedContent={uncheckedContent}
      />
      <SwitchControlHandle
        aria-hidden
        disabled={disabled}
        checked={checked}
        switchHeight={switchHeight}
        diameter={handleDiameter}
      />
    </SwitchControlContainer>
  );
};

export const SwitchControl =
  InternalSwitchControl as typeof InternalSwitchControl & {
    Container: typeof SwitchControlContainer;
    Handle: typeof SwitchControlHandle;
    Input: typeof SwitchControlInput;
    Text: typeof SwitchControlText;
  };

SwitchControl.Container = SwitchControlContainer;
SwitchControl.Handle = SwitchControlHandle;
SwitchControl.Input = SwitchControlInput;
SwitchControl.Text = SwitchControlText;
