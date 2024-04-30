import * as React from 'react';
import { useTheme } from 'styled-components';

import {
  GIArrowRight,
  GICalendarMonthDayPlannerEvents,
} from '@devoinc/genesys-icons';
import type {
  FieldProps,
  TFieldSize,
  IGlobalAriaAttrs,
  IGlobalAttrs,
  InputControlProps,
  IMouseEventAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
  ITriggerAriaAttrs,
} from '@devoinc/genesys-ui';
import { Field, InputControl } from '@devoinc/genesys-ui';

import { cssDateTimeRangeInput, ICssDateTimeRangeInput } from './helpers';
import {
  StyledDateTimeRangeInput,
  type StyledDateTimeRangeInputProps,
} from './StyledDateTimeRangeInput';

import { TOnChangeRange, TRealtimeState } from './declarations';
import { REAL_TIME_SIZE_MAP } from './constants';
import { getInputWidth } from './theme';
import { RealTimeButton, type RealTimeButtonProps } from '../RealTimeButton';
import {
  toTSorPreset,
  parseExpression as parseExpressionFN,
  isManageableDate,
  formatDate,
  ParseExpressionResult,
} from '../../utils';
import { TDatetime } from '../declarations';

export interface DateTimeRangeInputProps
  extends Required<Pick<IGlobalAttrs, 'id'>>,
    Pick<ITriggerAriaAttrs, 'aria-controls'>,
    Pick<ICssDateTimeRangeInput, 'hasMillis' | 'hasSeconds' | 'hasTime'>,
    Pick<StyledDateTimeRangeInputProps, 'isOpen' | 'wide'>,
    Pick<FieldProps, 'helper' | 'required'>,
    IStyledOverloadCss,
    IStyledPolymorphic {
  /** aria-label attribute for `from` input */
  ariaLabelFrom?: IGlobalAriaAttrs['aria-label'];
  /** aria-label attribute for `to` input */
  ariaLabelTo?: IGlobalAriaAttrs['aria-label'];
  /** Valid date format. Check https://date-fns.org/docs/format */
  dateFormats: string[];
  /** Value for the first input. */
  from?: string | TDatetime;
  /** Value for label prop */
  label?: FieldProps['label'];
  /** Floating status message or helper for `from` input field */
  helperFrom?: string;
  /** Floating status message or helper for `to` input field */
  helperTo?: string;
  /** Handler method after either 'from' or 'to' inputs field cliked  */
  onClick?: IMouseEventAttrs['onClick'];
  /** Handler method after either 'from' or 'to' inputs values change. */
  onChange?: (range: TOnChangeRange) => void;
  /** handler method after realTime button is clicked. */
  onRealTimeClick?: RealTimeButtonProps['onClick'];
  /** Transformation function for time. It is used to transform a time expression to timestamp. Required if there are presets. */
  parseExpression?: (expression: string) => ParseExpressionResult;
  /** A text hint that describes the expected value of the `from` field */
  placeholderFrom?: InputControlProps['placeholder'];
  /** A text hint that describes the expected value of the `to` field */
  placeholderTo?: InputControlProps['placeholder'];
  /** Defines the realTime state. If the value is 'hidden', realTime button will
   * not be shown. */
  realTime?: RealTimeButtonProps['state'];
  /** If a calendar icon is shown at the beginning of the control. */
  showCalendarIcon?: boolean;
  /** Size for the HTML input elements. */
  size?: TFieldSize;
  /** Initial state for `from` input field */
  statusFrom?: 'base' | 'error';
  /** Initial state for `to` input field */
  statusTo?: 'base' | 'error';
  /** Value for the second input. If such value is not set, its input will not be shown. */
  to?: string | TDatetime;
}

const hasRealTime = (realTime: TRealtimeState) => realTime !== 'hidden';

export const DateTimeRangeInput: React.FC<DateTimeRangeInputProps> = ({
  'aria-controls': ariaControls,
  ariaLabelFrom = 'from',
  ariaLabelTo = 'to',
  as,
  from: customFrom,
  hasMillis = false,
  hasSeconds = true,
  hasTime = true,
  helper = '',
  label = '',
  helperFrom,
  helperTo,
  id,
  onChange,
  onClick,
  onRealTimeClick,
  placeholderFrom,
  placeholderTo,
  realTime = 'hidden',
  required,
  showCalendarIcon,
  to: customTo,
  isOpen = false,
  wide,
  size = 'md',
  statusFrom = 'base',
  statusTo = 'base',
  styles,
  parseExpression = parseExpressionFN,
  dateFormats,
}) => {
  const theme = useTheme();

  const value = React.useMemo(
    () => ({
      from: toTSorPreset(customFrom),
      to: toTSorPreset(customTo),
    }),
    [customFrom, customTo],
  );

  const isManageableFromDate = isManageableDate(value.from);
  const isManageableToDate = isManageableDate(value.to);

  const strValue = React.useMemo(
    () => ({
      from: isManageableFromDate
        ? formatDate({
            format: dateFormats?.[0],
            hasMillis,
            hasSeconds,
            hasTime,
            ts: value.from as number,
          })
        : (value.from as string),
      to: isManageableToDate
        ? formatDate({
            format: dateFormats?.[0],
            hasMillis,
            hasSeconds,
            hasTime,
            ts: value.to as number,
          })
        : (value.to as string),
    }),
    [
      dateFormats,
      hasMillis,
      hasSeconds,
      hasTime,
      isManageableFromDate,
      isManageableToDate,
      value.from,
      value.to,
    ],
  );

  const [initialDate, setInitialDate] = React.useState(value);
  const [inputValue, setInputValue] = React.useState<{
    from: string;
    to: string;
  }>(strValue);
  const [status, setStatus] = React.useState<{
    from: { status: 'base' | 'error'; helper: string };
    to: { status: 'base' | 'error'; helper: string };
  }>(() => {
    const resultFrom = parseExpressionFN(
      strValue.from,
      dateFormats,
      parseExpression,
    );
    const resultTo = parseExpressionFN(
      strValue.to,
      dateFormats,
      parseExpression,
    );
    return {
      from: resultFrom.isValid
        ? { status: statusFrom, helper: helperFrom }
        : { status: 'error', helper: resultFrom.errors.join('. ') },
      to: resultTo.isValid
        ? { status: statusTo, helper: helperTo }
        : { status: 'error', helper: resultTo.errors.join('. ') },
    };
  });

  const onChangeFromCallback = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const element = event.target as HTMLInputElement;
      setInputValue({ ...inputValue, from: element.value });
      const result = parseExpressionFN(
        element.value,
        dateFormats,
        parseExpression,
      );
      if (result.isValid) {
        setStatus({
          ...status,
          from: { status: statusFrom, helper: helperFrom },
        });
      } else {
        setStatus({
          ...status,
          from: { status: 'error', helper: result.errors.join('. ') },
        });
      }
    },
    [dateFormats, helperFrom, inputValue, parseExpression, status, statusFrom],
  );

  const onChangeToCallback = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const element = event.target as HTMLInputElement;
      setInputValue({ ...inputValue, to: element.value });
      const result = parseExpressionFN(
        element.value,
        dateFormats,
        parseExpression,
      );
      if (result.isValid) {
        setStatus({ ...status, to: { status: statusTo, helper: helperTo } });
      } else {
        setStatus({
          ...status,
          to: { status: 'error', helper: result.errors.join('. ') },
        });
      }
    },
    [dateFormats, helperTo, inputValue, parseExpression, status, statusTo],
  );

  const updateFromDateCallback = React.useCallback(() => {
    const result = parseExpressionFN(
      inputValue.from,
      dateFormats,
      parseExpression,
    );
    if (result.isValid) {
      setInitialDate({ ...initialDate, from: result.value });
      onChange?.({
        to: { value: initialDate.to, str: inputValue.to },
        from: { value: result.value, str: inputValue.from },
      });
      setStatus({
        ...status,
        from: { status: statusFrom, helper: helperFrom },
      });
    } else {
      setStatus({
        ...status,
        from: { status: 'error', helper: result.errors.join('. ') },
      });
    }
  }, [
    inputValue.from,
    inputValue.to,
    dateFormats,
    parseExpression,
    initialDate,
    onChange,
    status,
    statusFrom,
    helperFrom,
  ]);

  const updateToDateCallback = React.useCallback(() => {
    const result = parseExpressionFN(
      inputValue.to,
      dateFormats,
      parseExpression,
    );
    if (result.isValid) {
      setInitialDate({ ...initialDate, to: result.value });
      onChange?.({
        from: { value: initialDate.from, str: inputValue.from },
        to: { value: result.value, str: inputValue.to },
      });
      setStatus({ ...status, to: { status: statusTo, helper: helperTo } });
    } else {
      setStatus({
        ...status,
        to: { status: 'error', helper: result.errors.join('. ') },
      });
    }
  }, [
    inputValue.to,
    inputValue.from,
    dateFormats,
    parseExpression,
    initialDate,
    onChange,
    status,
    statusTo,
    helperTo,
  ]);

  const onKeyUpFromCallback = React.useCallback(
    (event: React.KeyboardEvent<Element>) => {
      if (
        event.type === 'keyup' &&
        event.code === 'Enter' &&
        status.from.status === 'base'
      ) {
        updateFromDateCallback();
      } else if (event.type === 'keyup' && event.code === 'Escape') {
        setInputValue({
          ...inputValue,
          from: formatDate({
            ts: initialDate.from as number,
            format: dateFormats?.[0],
            hasMillis,
            hasSeconds,
            hasTime,
          }),
        });
        setStatus({
          ...status,
          from: { status: statusFrom, helper: helperFrom },
        });
      }
    },
    [
      status,
      updateFromDateCallback,
      inputValue,
      initialDate.from,
      dateFormats,
      hasMillis,
      hasSeconds,
      hasTime,
      statusFrom,
      helperFrom,
    ],
  );

  const onKeyUpToCallback = React.useCallback(
    (event: React.KeyboardEvent<Element>) => {
      if (
        event.type === 'keyup' &&
        event.code === 'Enter' &&
        status.to.status === 'base'
      ) {
        updateToDateCallback();
      } else if (event.type === 'keyup' && event.code === 'Escape') {
        setInputValue({
          ...inputValue,
          to: formatDate({
            ts: initialDate.to as number,
            format: dateFormats?.[0],
            hasMillis,
            hasSeconds,
            hasTime,
          }),
        });
        setStatus({
          ...status,
          to: { status: statusTo, helper: helperTo },
        });
      }
    },
    [
      status,
      updateToDateCallback,
      inputValue,
      initialDate.to,
      dateFormats,
      hasMillis,
      hasSeconds,
      hasTime,
      statusTo,
      helperTo,
    ],
  );

  React.useEffect(() => {
    const resultTo = parseExpressionFN(
      strValue.to,
      dateFormats,
      parseExpression,
    );
    const resultFrom = parseExpressionFN(
      strValue.from,
      dateFormats,
      parseExpression,
    );

    setInitialDate({
      from: resultFrom.isValid ? resultFrom.value : value.from,
      to: resultTo.isValid ? resultTo.value : value.from,
    });
    setInputValue(strValue);
    setStatus({
      from: resultFrom.isValid
        ? { status: statusFrom, helper: helperFrom }
        : { status: 'error', helper: resultFrom.errors.join('. ') },
      to: resultTo.isValid
        ? { status: statusTo, helper: helperTo }
        : { status: 'error', helper: resultTo.errors.join('. ') },
    });
  }, [
    dateFormats,
    helperFrom,
    helperTo,
    parseExpression,
    statusFrom,
    statusTo,
    strValue,
    value,
  ]);

  return (
    <Field label={label} id={id} helper={helper} required={required}>
      <StyledDateTimeRangeInput
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
        {showCalendarIcon && (
          <GICalendarMonthDayPlannerEvents
            color={theme.cmp.dateTimeRangeControl.arrow.color.fill}
            size={theme.cmp.dateTimeRangeControl.arrow.size.square[size]}
          />
        )}
        <Field
          controlWidth={getInputWidth({
            hasMillis,
            hasSeconds,
            hasTime,
            size,
            theme,
          })}
          hasFloatingHelper
          helper={status.from.helper}
          hideLabel
          id={`${id}-input-from`}
          label={ariaLabelFrom}
          status={status.from.status}
        >
          <InputControl._Input
            aria-label={ariaLabelFrom}
            id={`${id}-input-from`}
            onChange={onChangeFromCallback}
            onKeyUp={onKeyUpFromCallback}
            placeholder={placeholderFrom}
            size={size}
            status={status.from.status}
            styles={cssDateTimeRangeInput({
              hasMillis,
              hasSeconds,
              hasTime,
              size,
              status: status.from.status,
            })}
            value={inputValue.from}
          />
        </Field>
        <GIArrowRight
          color={theme.cmp.dateTimeRangeControl.arrow.color.fill}
          size={theme.cmp.dateTimeRangeControl.arrow.size.square[size]}
        />
        <Field
          controlWidth={getInputWidth({
            hasMillis,
            hasSeconds,
            hasTime,
            size,
            theme,
          })}
          hasFloatingHelper
          helper={status.to.helper}
          hideLabel
          id={`${id}-input-to`}
          label={ariaLabelFrom}
          status={status.to.status}
        >
          <InputControl._Input
            aria-label={ariaLabelTo}
            id={`${id}-input-to`}
            onChange={onChangeToCallback}
            onKeyUp={onKeyUpToCallback}
            placeholder={placeholderTo}
            size={size}
            status={status.to.status}
            styles={cssDateTimeRangeInput({
              hasMillis,
              hasSeconds,
              hasTime,
              size,
              status: status.to.status,
            })}
            value={inputValue.to}
          />
        </Field>
        {hasRealTime(realTime) && (
          <RealTimeButton
            onClick={onRealTimeClick}
            size={REAL_TIME_SIZE_MAP[size]}
            state={realTime}
          />
        )}
      </StyledDateTimeRangeInput>
    </Field>
  );
};
