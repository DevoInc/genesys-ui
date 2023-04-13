import * as React from 'react';
import { useTheme } from 'styled-components';

// icons
import { GIArrowRight } from '@devoinc/genesys-icons';

// core
import type {
  FieldSize,
  GlobalAriaProps,
  GlobalAttrProps,
  MouseEventAttrProps,
  TriggerAriaProps,
} from '@devoinc/genesys-ui';
import { HFlex } from '@devoinc/genesys-ui';

// form
import { Input, InputProps } from '@devoinc/genesys-ui-form';

// styles
import {
  cssDateTimeRangeControlInput,
  CssDateTimeRangeControlInputProps,
} from './mixins';
import {
  StyledDateTimeRangeControl,
  StyledDateTimeRangeControlProps,
} from './StyledDateTimeRangeControl';

// local components
import { RealtimeState } from './declarations';
import {
  DateTimeRangeControlRTButton,
  DateTimeRangeControlRTButtonProps,
} from './DateTimeRangeControlRTButton';

export interface DateTimeRangeControlProps
  extends Required<Pick<GlobalAttrProps, 'id'>>,
    Pick<TriggerAriaProps, 'aria-controls'>,
    Pick<
      CssDateTimeRangeControlInputProps,
      'hasMillis' | 'hasSeconds' | 'hasTime'
    >,
    Pick<StyledDateTimeRangeControlProps, 'isOpen' | 'wide'> {
  /** aria-label attribute for `from` input */
  ariaLabelFrom?: GlobalAriaProps['aria-label'];
  /** aria-label attribute for `to` input */
  ariaLabelTo?: GlobalAriaProps['aria-label'];
  /** Class name for the HTML input elements. */
  className?: string;
  /** Value for the first input. */
  from?: InputProps['value'];
  /** Floating status message or helper for `from` input field */
  helperFrom?: InputProps['helper'];
  /** Floating status message or helper for `to` input field */
  helperTo?: InputProps['helper'];
  /** Handler method after either 'from' or 'to' inputs field cliked  */
  onClick?: MouseEventAttrProps['onClick'];
  /** Handler method after either 'from' or 'to' inputs lost focus. */
  onBlur?: (range: {
    from: InputProps['value'];
    to: InputProps['value'];
  }) => void;
  /** Handler method after either 'from' or 'to' inputs values change. */
  onChange?: (range: {
    from: InputProps['value'];
    to: InputProps['value'];
  }) => void;
  /** handler method after realTime button is clicked. */
  onRealTimeClick?: DateTimeRangeControlRTButtonProps['onClick'];
  /** A text hint that describes the expected value of the `from` field */
  placeholderFrom?: InputProps['placeholder'];
  /** A text hint that describes the expected value of the `to` field */
  placeholderTo?: InputProps['placeholder'];
  /** Defines the realTime state. If the value is 'hidden', realTime button will
   * not be shown. */
  realTime?: DateTimeRangeControlRTButtonProps['state'];
  /** Size for the HTML input elements. */
  size?: FieldSize;
  /** Status for `from` input field */
  statusFrom?: InputProps['status'];
  /** Status for `from` input field */
  statusTo?: InputProps['status'];
  /** Value for the second input. If such value is not set, its input will not be shown. */
  to?: InputProps['value'];
}

const hasRealTime = (realTime: RealtimeState) => realTime !== 'hidden';

export const DateTimeRangeControl: React.FC<DateTimeRangeControlProps> = ({
  'aria-controls': ariaControls,
  ariaLabelFrom = 'from',
  ariaLabelTo = 'to',
  from,
  helperFrom,
  helperTo,
  id,
  onBlur,
  onChange,
  onClick,
  onRealTimeClick,
  placeholderFrom,
  placeholderTo,
  realTime = 'hidden',
  to,
  isOpen = false,
  wide,
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

  const dateTimeRangeControlTokens = useTheme().cmp.dateTimeRangeControl;

  const getInputWidth = ({ hasMillis, hasSeconds, hasTime, size }) => {
    return dateTimeRangeControlTokens.input.size.width[
      hasMillis
        ? 'withMillis'
        : hasSeconds
        ? 'withSeconds'
        : hasTime
        ? 'withTime'
        : 'base'
    ][size];
  };

  return (
    <StyledDateTimeRangeControl
      aria-controls={ariaControls}
      aria-haspopup
      hideRealTime={hasRealTime(realTime)}
      id={id}
      isOpen={isOpen}
      onClick={onClick}
      role="button"
      size={size}
      tabIndex={0}
      wide={wide}
    >
      <HFlex
        width={getInputWidth({
          hasMillis: props.hasMillis,
          hasSeconds: props.hasSeconds,
          hasTime: props.hasTime,
          size,
        })}
      >
        <Input
          {...props}
          css={cssDateTimeRangeControlInput({
            hasMillis: props.hasMillis,
            hasSeconds: props.hasSeconds,
            hasTime: props.hasTime,
            size,
            status: statusFrom,
          })}
          hasFloatingHelper
          helper={helperFrom}
          hideLabel
          id={`${id}-input-from`}
          label={ariaLabelFrom}
          placeholder={placeholderFrom}
          status={statusFrom}
          value={from}
          size={size}
          onBlur={onBlurFromCallback}
          onChange={onChangeFromCallback}
        />
      </HFlex>
      <GIArrowRight
        size={dateTimeRangeControlTokens.arrow.size.square[size]}
        color={dateTimeRangeControlTokens.arrow.color.fill}
      />
      <HFlex
        width={getInputWidth({
          hasMillis: props.hasMillis,
          hasSeconds: props.hasSeconds,
          hasTime: props.hasTime,
          size,
        })}
      >
        <Input
          {...props}
          css={cssDateTimeRangeControlInput({
            hasMillis: props.hasMillis,
            hasSeconds: props.hasSeconds,
            hasTime: props.hasTime,
            size,
            status: statusTo,
          })}
          hasFloatingHelper
          helper={helperTo}
          hideLabel
          id={`${id}-input-to`}
          label={ariaLabelTo}
          placeholder={placeholderTo}
          status={statusTo}
          value={to}
          size={size}
          onBlur={onBlurToCallback}
          onChange={onChangeToCallback}
        />
      </HFlex>
      {hasRealTime(realTime) && (
        <DateTimeRangeControlRTButton
          onClick={onRealTimeClick}
          state={realTime}
          size={size}
        />
      )}
    </StyledDateTimeRangeControl>
  );
};
