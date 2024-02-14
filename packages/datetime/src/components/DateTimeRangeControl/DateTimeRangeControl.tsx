import * as React from 'react';
import { useTheme } from 'styled-components';

// icons
import { GIArrowRight } from '@devoinc/genesys-icons';

// core
import type {
  FieldProps,
  FieldSize,
  GlobalAriaProps,
  GlobalAttrProps,
  InputControlProps,
  MouseEventAttrProps,
  TriggerAriaProps,
} from '@devoinc/genesys-ui';
import {
  Field,
  InputControl,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '@devoinc/genesys-ui';

// styles
import {
  cssDateTimeRangeControlInput,
  CssDateTimeRangeControlInputProps,
} from './helpers';
import {
  StyledDateTimeRangeControl,
  StyledDateTimeRangeControlProps,
} from './StyledDateTimeRangeControl';

// local components
import { RealtimeState } from './declarations';
import { RealTimeButton, RealTimeButtonProps } from '../RealTimeButton';

export interface DateTimeRangeControlProps
  extends Required<Pick<GlobalAttrProps, 'id'>>,
    Pick<TriggerAriaProps, 'aria-controls'>,
    Pick<
      CssDateTimeRangeControlInputProps,
      'hasMillis' | 'hasSeconds' | 'hasTime'
    >,
    Pick<StyledDateTimeRangeControlProps, 'isOpen' | 'wide'>,
    StyledOverloadCssProps,
    StyledPolymorphicProps {
  /** aria-label attribute for `from` input */
  ariaLabelFrom?: GlobalAriaProps['aria-label'];
  /** aria-label attribute for `to` input */
  ariaLabelTo?: GlobalAriaProps['aria-label'];
  /** Value for the first input. */
  from?: InputControlProps['value'];
  /** Floating status message or helper for `from` input field */
  helperFrom?: FieldProps['helper'];
  /** Floating status message or helper for `to` input field */
  helperTo?: FieldProps['helper'];
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
  onRealTimeClick?: RealTimeButtonProps['onClick'];
  /** A text hint that describes the expected value of the `from` field */
  placeholderFrom?: InputControlProps['placeholder'];
  /** A text hint that describes the expected value of the `to` field */
  placeholderTo?: InputControlProps['placeholder'];
  /** Defines the realTime state. If the value is 'hidden', realTime button will
   * not be shown. */
  realTime?: RealTimeButtonProps['state'];
  /** Size for the HTML input elements. */
  size?: FieldSize;
  /** Status for `from` input field */
  statusFrom?: FieldProps['status'];
  /** Status for `from` input field */
  statusTo?: FieldProps['status'];
  /** Value for the second input. If such value is not set, its input will not be shown. */
  to?: InputControlProps['value'];
}

const hasRealTime = (realTime: RealtimeState) => realTime !== 'hidden';

export const DateTimeRangeControl: React.FC<DateTimeRangeControlProps> = ({
  'aria-controls': ariaControls,
  ariaLabelFrom = 'from',
  ariaLabelTo = 'to',
  as,
  from,
  hasMillis,
  hasSeconds,
  hasTime,
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
  styles,
}) => {
  const onBlurFromCallback = React.useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      onBlur({ from: event.target.value, to });
    },
    [onBlur, to],
  );

  const onBlurToCallback = React.useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      onBlur({ from, to: event.target.value });
    },
    [from, onBlur],
  );

  const onChangeFromCallback = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange({ from: event.target.value, to });
    },
    [onChange, to],
  );

  const onChangeToCallback = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange({ from, to: event.target.value });
    },
    [from, onChange],
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
      aria-controls={isOpen ? ariaControls : null}
      aria-haspopup
      as={as}
      css={styles}
      hideRealTime={hasRealTime(realTime)}
      id={id}
      isOpen={isOpen}
      onClick={onClick}
      size={size}
      tabIndex={0}
      wide={wide}
    >
      <Field
        controlWidth={getInputWidth({ hasMillis, hasSeconds, hasTime, size })}
        label={ariaLabelFrom}
        id={`${id}-input-from`}
        hasFloatingHelper
        helper={helperFrom}
        hideLabel
        status={statusFrom}
      >
        <InputControl._Input
          styles={cssDateTimeRangeControlInput({
            hasMillis,
            hasSeconds,
            hasTime,
            size,
            status: statusFrom,
          })}
          aria-label={ariaLabelFrom}
          id={`${id}-input-from`}
          placeholder={placeholderFrom}
          status={statusFrom}
          value={from}
          size={size}
          onBlur={onBlurFromCallback}
          onChange={onChangeFromCallback}
        />
      </Field>
      <GIArrowRight
        size={dateTimeRangeControlTokens.arrow.size.square[size]}
        color={dateTimeRangeControlTokens.arrow.color.fill}
      />
      <Field
        controlWidth={getInputWidth({ hasMillis, hasSeconds, hasTime, size })}
        label={ariaLabelFrom}
        id={`${id}-input-to`}
        hasFloatingHelper
        helper={helperTo}
        hideLabel
        status={statusTo}
      >
        <InputControl._Input
          styles={cssDateTimeRangeControlInput({
            hasMillis,
            hasSeconds,
            hasTime,
            size,
            status: statusTo,
          })}
          aria-label={ariaLabelTo}
          id={`${id}-input-to`}
          placeholder={placeholderTo}
          status={statusTo}
          value={to}
          size={size}
          onBlur={onBlurToCallback}
          onChange={onChangeToCallback}
        />
      </Field>
      {hasRealTime(realTime) && (
        <RealTimeButton
          onClick={onRealTimeClick}
          state={realTime}
          size={size}
        />
      )}
    </StyledDateTimeRangeControl>
  );
};
