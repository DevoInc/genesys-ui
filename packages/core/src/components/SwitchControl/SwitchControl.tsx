import * as React from 'react';
import { useTheme } from 'styled-components';

import {
  CheckAttrProps,
  FieldControlCommonProps,
  FieldSize,
  FieldStatus,
  InputAttrProps,
  StyledOverloadCssPropsWithRecord,
} from '../../declarations';

import { getPxFromRem } from '../../helpers';

import {
  SwitchControlContainer,
  SwitchControlHandle,
  SwitchControlInput,
  SwitchControlText,
} from './components';

export interface BaseSwitchControlProps
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

export type SwitchControlProps = BaseSwitchControlProps &
  StyledOverloadCssPropsWithRecord<'container' | 'handle' | 'text'>;

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
  styles,
  subcomponentStyles,
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
      styles={subcomponentStyles?.container || styles}
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
        styles={subcomponentStyles?.text}
        uncheckedContent={uncheckedContent}
      />
      <SwitchControlHandle
        aria-hidden
        checked={checked}
        diameter={handleDiameter}
        disabled={disabled}
        styles={subcomponentStyles?.handle}
        switchHeight={switchHeight}
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
