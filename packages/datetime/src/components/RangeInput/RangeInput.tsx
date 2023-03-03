import * as React from 'react';

import { GIArrowRight } from '@devoinc/genesys-icons';
import type {
  FieldSize,
  GlobalAriaProps,
  GlobalAttrProps,
  InputControlProps,
  MouseEventAttrProps,
} from '@devoinc/genesys-ui';
import {
  StyledInput,
  StyledField,
  StyledFieldProps,
  StyledInputProps,
} from './styled';
import { RTButton, RTButtonProps } from './RTButton';
import { RealtimeState } from './declarations';

export interface RangeInputProps
  extends Pick<GlobalAttrProps, 'id'>,
    Pick<StyledFieldProps, 'isOpen' | 'width' | 'withShift'> {
  /** aria-label attribute for `from` input */
  ariaLabelFrom?: GlobalAriaProps['aria-label'];
  /** aria-label attribute for `to` input */
  ariaLabelTo?: GlobalAriaProps['aria-label'];
  /** Class name for the HTML input elements. */
  className?: string;
  /** Value for the first input. */
  from?: InputControlProps['value'];
  /** Handler method after either 'from' or 'to' inputs field cliked  */
  onClick?: MouseEventAttrProps['onClick'];
  /** Handler method after either 'from' or 'to' inputs lost focus. */
  onBlur?: (range: {
    from: InputControlProps['value'];
    to: InputControlProps['value'];
  }) => void;
  /** Handler method after either 'from' or 'to' inputs values change. */
  onChange?: (range: {
    from: InputControlProps['value'];
    to: InputControlProps['value'];
  }) => void;
  /** handler method after realTime button is clicked. */
  onRealTimeClick?: RTButtonProps['onClick'];
  /** A text hint that describes the expected value of the `from` field */
  placeholderFrom?: InputControlProps['placeholder'];
  /** A text hint that describes the expected value of the `to` field */
  placeholderTo?: InputControlProps['placeholder'];
  /** Defines the realTime state. If the value is 'hidden', realTime button will
   * not be shown. */
  realTime?: RTButtonProps['state'];
  /** Size for the HTML input elements. */
  size?: FieldSize;
  /** Status for `from` input field */
  statusFrom?: StyledInputProps['status'];
  /** Status for `from` input field */
  statusTo?: StyledInputProps['status'];
  /** Value for the second input. If such value is not set, its input will not be shown. */
  to?: InputControlProps['value'];
}

const hasRealTime = (realTime: RealtimeState) => realTime !== 'hidden';

export const RangeInput: React.FC<RangeInputProps> = ({
  ariaLabelFrom = 'from',
  ariaLabelTo = 'to',
  from,
  id = 'range',
  onBlur,
  onChange,
  onClick,
  onRealTimeClick,
  placeholderFrom,
  placeholderTo,
  realTime = 'hidden',
  to,
  isOpen = false,
  width,
  withShift = false,
  statusFrom = 'base',
  statusTo = 'base',
  size,
  ...props
}) => {
  const onBlurFromCallback = React.useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      onBlur({ from: event.target.value, to });
    },
    [onBlur, to]
  );

  const onBlurToCallback = React.useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      onBlur({ from, to: event.target.value });
    },
    [from, onBlur]
  );

  const onChangeFromCallback = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange({ from: event.target.value, to });
    },
    [onChange, to]
  );

  const onChangeToCallback = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange({ from, to: event.target.value });
    },
    [from, onChange]
  );

  return (
    <StyledField
      onClick={onClick}
      hideRealTime={hasRealTime(realTime)}
      isOpen={isOpen}
      width={width}
      withShift={withShift}
    >
      <StyledInput
        {...props}
        aria-label={ariaLabelFrom}
        id={`${id}_input_from`}
        placeholder={placeholderFrom}
        status={statusFrom}
        value={from}
        size={size}
        onBlur={onBlurFromCallback}
        onChange={onChangeFromCallback}
      />
      <GIArrowRight size={32} color={'#1f282e'} />
      <StyledInput
        {...props}
        aria-label={ariaLabelTo}
        id={`${id}_input_to`}
        placeholder={placeholderTo}
        status={statusTo}
        value={to}
        size={size}
        onBlur={onBlurToCallback}
        onChange={onChangeToCallback}
      />
      {hasRealTime(realTime) && (
        <RTButton onClick={onRealTimeClick} state={realTime} size={size} />
      )}
    </StyledField>
  );
};
