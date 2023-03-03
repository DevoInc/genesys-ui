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
  StyledHandle,
  StyledInput,
  StyledTextChecked,
  StyledTextUnchecked,
  StyledTextWrapper,
  StyledWrapper,
} from './styled';

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

export const SwitchControl: React.FC<SwitchControlProps> = ({
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
  title,
  uncheckedContent,
  ...restNativeProps
}) => {
  const { tokens } = useTheme();
  const switchTokens = tokens.cmp.switchControl;
  const trackTokens = switchTokens.track;
  const handlerTokens = switchTokens.handler;

  const refUnchecked = React.useRef<any>();
  const refChecked = React.useRef<any>();
  const [width, setWidth] = React.useState(0);
  React.useEffect(() => {
    setWidth(
      Math.max(
        refUnchecked?.current?.offsetWidth,
        refChecked?.current?.offsetWidth
      )
    );
  }, [checkedContent, uncheckedContent]);

  const handleDiameter = getPxFromRem(handlerTokens.size.square[size]);
  const switchHeight = getPxFromRem(trackTokens.size.height[size]);

  return (
    <StyledWrapper
      $disabled={disabled}
      $checked={checked}
      heightProp={switchHeight}
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
      title={title}
    >
      <StyledInput
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
      <StyledTextWrapper widthProp={width} $checked={checked}>
        <StyledTextUnchecked $checked={checked} ref={refUnchecked}>
          {uncheckedContent}
        </StyledTextUnchecked>
        <StyledTextChecked $checked={checked} ref={refChecked}>
          {checkedContent}
        </StyledTextChecked>
      </StyledTextWrapper>
      <StyledHandle
        aria-hidden
        $disabled={disabled}
        $checked={checked}
        switchHeight={switchHeight}
        diameter={handleDiameter}
      />
    </StyledWrapper>
  );
};
