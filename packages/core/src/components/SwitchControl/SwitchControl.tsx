import * as React from 'react';
import { useTheme } from 'styled-components';

import {
  StyledOverloadCssPropsWithRecord,
  WithRequiredAriaLabelOrAriaLabelledByProps,
} from '../../declarations';
import { BaseSwitchControlProps } from './declarations';

import { getPxFromRem } from '../../helpers';

import {
  SwitchControlContainer,
  SwitchControlHandle,
  SwitchControlInput,
  SwitchControlText,
} from './components';

export type SwitchControlProps =
  WithRequiredAriaLabelOrAriaLabelledByProps<BaseSwitchControlProps> &
    StyledOverloadCssPropsWithRecord<'container' | 'handle' | 'text'>;

export const InternalSwitchControl: React.FC<SwitchControlProps> = ({
  'aria-errormessage': ariaErrorMessage,
  'aria-invalid': ariaInvalid,
  autoFocus,
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
        autoFocus={autoFocus}
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
