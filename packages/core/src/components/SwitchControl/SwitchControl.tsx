import * as React from 'react';
import { useTheme } from 'styled-components';

import type { IWithRequiredAriaLabelOrAriaLabelledByAttr } from '../../declarations';
import type { ISwitch } from './declarations';
import { FieldContext } from '../Field/context';
import { getPxFromRem } from '../../helpers';
import { getFieldContextProps } from '../Field';
import {
  SwitchControlContainer,
  SwitchControlHandle,
  SwitchControlInput,
  SwitchControlText,
} from './components';

export type SwitchControlProps =
  IWithRequiredAriaLabelOrAriaLabelledByAttr<ISwitch>;

export const InternalSwitchControl: React.FC<SwitchControlProps> = ({
  'aria-errormessage': ariaErrorMessage,
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  autoFocus,
  checked,
  checkedContent,
  disabled,
  id,
  onChange,
  onClick,
  onMouseDown,
  onMouseLeave,
  onMouseMove,
  onMouseOut,
  onMouseOver,
  onMouseUp,
  required,
  size,
  status,
  style,
  tooltip,
  uncheckedContent,
  ...restNativeProps
}) => {
  const fieldContext = React.useContext(FieldContext);
  const contextBasedProps = getFieldContextProps({
    ariaDescribedBy,
    ariaErrorMessage,
    ariaLabelledBy,
    context: fieldContext,
    disabled,
    id,
    required,
    size,
    status,
  });
  const evalStatus = contextBasedProps.status;
  const evalSize = contextBasedProps.size;
  const evalDisabled = contextBasedProps.disabled;
  const tokens = useTheme();
  const switchTokens = tokens.cmp.switchControl;
  const trackTokens = switchTokens.track;
  const handlerTokens = switchTokens.handler;
  const handleDiameter = getPxFromRem(handlerTokens.size.square[evalSize]);
  const switchHeight = getPxFromRem(trackTokens.size.height[evalSize]);

  return (
    <SwitchControlContainer
      disabled={evalDisabled}
      checked={checked}
      heightPx={switchHeight}
      handleDiameter={handleDiameter}
      id={contextBasedProps.id}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      onMouseUp={onMouseUp}
      size={evalSize}
      status={evalStatus}
      style={style}
      tooltip={tooltip}
    >
      <SwitchControlInput
        {...restNativeProps}
        aria-describedby={contextBasedProps.ariaDescribedBy}
        aria-errormessage={
          evalStatus === 'error'
            ? contextBasedProps.ariaErrorMessage
            : undefined
        }
        aria-invalid={
          ariaInvalid ?? (evalStatus === 'error' ? true : undefined)
        }
        aria-label={ariaLabel}
        aria-labelledby={contextBasedProps.ariaLabelledBy}
        autoFocus={autoFocus}
        checked={onChange ? checked : undefined}
        disabled={evalDisabled}
        id={contextBasedProps.id}
        onChange={onChange}
        required={contextBasedProps.required}
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
        checked={checked}
        diameter={handleDiameter}
        disabled={evalDisabled}
        switchHeight={switchHeight}
      />
    </SwitchControlContainer>
  );
};

export const SwitchControl =
  InternalSwitchControl as typeof InternalSwitchControl & {
    _Container: typeof SwitchControlContainer;
    _Handle: typeof SwitchControlHandle;
    _Input: typeof SwitchControlInput;
    _Text: typeof SwitchControlText;
  };

SwitchControl._Container = SwitchControlContainer;
SwitchControl._Handle = SwitchControlHandle;
SwitchControl._Input = SwitchControlInput;
SwitchControl._Text = SwitchControlText;

InternalSwitchControl.displayName = 'SwitchControl';
SwitchControl._Container.displayName = 'SwitchControl._Container';
SwitchControl._Handle.displayName = 'SwitchControl._Handle';
SwitchControl._Input.displayName = 'SwitchControl._Input';
SwitchControl._Text.displayName = 'SwitchControl._Text';
