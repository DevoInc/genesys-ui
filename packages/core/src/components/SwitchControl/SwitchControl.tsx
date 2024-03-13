import * as React from 'react';
import { useTheme } from 'styled-components';

import type { WithRequiredAriaLabelOrAriaLabelledByProps } from '../../declarations';
import type { BaseSwitchControlProps } from './declarations';
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
  WithRequiredAriaLabelOrAriaLabelledByProps<BaseSwitchControlProps>;

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
  styles,
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
      styles={styles}
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
    Container: typeof SwitchControlContainer;
    Handle: typeof SwitchControlHandle;
    Input: typeof SwitchControlInput;
    Text: typeof SwitchControlText;
  };

SwitchControl.Container = SwitchControlContainer;
SwitchControl.Handle = SwitchControlHandle;
SwitchControl.Input = SwitchControlInput;
SwitchControl.Text = SwitchControlText;
