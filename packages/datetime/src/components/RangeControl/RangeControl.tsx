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
  StyledRangeControl,
  StyledRangeControlProps,
  StyledRangeControlInput,
  StyledRangeControlInputProps,
} from './styled';
import { RTButton, RTButtonProps } from './RTButton';
import { RealtimeState } from './declarations';

export interface RangeControlProps
  extends Pick<GlobalAttrProps, 'id'>,
    Pick<StyledRangeControlInputProps, 'hasMillis' | 'hasSeconds' | 'hasTime'>,
    Pick<StyledRangeControlProps, 'isOpen' | 'width'> {
  /** aria-label attribute for `from` input */
  ariaLabelFrom?: GlobalAriaProps['aria-label'];
  /** aria-label attribute for `to` input */
  ariaLabelTo?: GlobalAriaProps['aria-label'];
  /** Class name for the HTML input elements. */
  className?: string;
  /** Value for the first input. */
  from?: InputControlProps['value'];
  /** Floating status message or helper for `from` input field */
  helperFrom?: React.ReactNode;
  /** Floating status message or helper for `to` input field */
  helperTo?: React.ReactNode;
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
  statusFrom?: StyledRangeControlInputProps['status'];
  /** Status for `from` input field */
  statusTo?: StyledRangeControlInputProps['status'];
  /** Value for the second input. If such value is not set, its input will not be shown. */
  to?: InputControlProps['value'];
}

const hasRealTime = (realTime: RealtimeState) => realTime !== 'hidden';

export const RangeControl: React.FC<RangeControlProps> = ({
  ariaLabelFrom = 'from',
  ariaLabelTo = 'to',
  from,
  helperFrom,
  helperTo,
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
  statusFrom = 'base',
  statusTo = 'base',
  size = 'md',
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

  const arrowSizeMap = {
    sm: 14,
    md: 18,
    lg: 22,
  };

  return (
    <StyledRangeControl
      onClick={onClick}
      hideRealTime={hasRealTime(realTime)}
      isOpen={isOpen}
      size={size}
      width={width}
    >
      <StyledRangeControlInput
        {...props}
        hasFloatingHelper
        helper={helperFrom}
        hideLabel
        id={`${id}_input_from`}
        label={ariaLabelFrom}
        placeholder={placeholderFrom}
        status={statusFrom}
        value={from}
        size={size}
        onBlur={onBlurFromCallback}
        onChange={onChangeFromCallback}
      />
      <GIArrowRight size={arrowSizeMap[size]} color={'#1f282e'} />
      <StyledRangeControlInput
        {...props}
        hasFloatingHelper
        helper={helperTo}
        hideLabel
        id={`${id}_input_to`}
        label={ariaLabelTo}
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
    </StyledRangeControl>
  );
};
