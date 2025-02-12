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
  TControlWidth,
  IDataAttrs,
} from '@devoinc/genesys-ui';
import { Field, InputControl } from '@devoinc/genesys-ui';

import { cssDateTimeRangeInput, ICssDateTimeRangeInput } from './helpers';
import { StyledDateTimeRangeInput } from './StyledDateTimeRangeInput';

import { TRealtimeState } from '../RealTimeButton/declarations';
import { REAL_TIME_SIZE_MAP } from './constants';
import { RealTimeButton, type RealTimeButtonProps } from '../RealTimeButton';

export interface DateTimeRangeInputProps
  extends Required<Pick<IGlobalAttrs, 'id'>>,
    Pick<ITriggerAriaAttrs, 'aria-controls'>,
    Pick<ICssDateTimeRangeInput, 'hasMillis' | 'hasSeconds' | 'hasTime'>,
    Pick<FieldProps, 'helper' | 'required' | 'controlWidth'>,
    IDataAttrs,
    IStyledOverloadCss,
    IStyledPolymorphic {
  /** Set styles when is open a component */
  isOpen?: boolean;
  /** aria-label attribute for inputs */
  ariaLabel?: IGlobalAriaAttrs['aria-label'][];
  /** Value for the inputs. */
  value?: string[];
  /** Value for label prop */
  label?: FieldProps['label'];
  /** Floating status message or helper for input fields */
  helpers?: string[];
  /** Handler method after either 'from' or 'to' inputs field cliked  */
  onClick?: IMouseEventAttrs['onClick'];
  /** Handler method after either 'from' or 'to' inputs values change. */
  onChange?: (index: number, str: string) => void;
  onKeyUp?: (index: number, event: React.KeyboardEvent) => void;
  onBlur?: (index: number, event: React.FocusEvent) => void;
  /** handler method after realTime button is clicked. */
  onRealTimeClick?: RealTimeButtonProps['onClick'];
  /** A text hint that describes the expected value of the fields */
  placeholders?: InputControlProps['placeholder'][];
  /** Defines the realTime state. If the value is 'hidden', realTime button will
   * not be shown. */
  realTime?: RealTimeButtonProps['state'];
  /** If a calendar icon is shown at the beginning of the control. */
  showCalendarIcon?: boolean;
  /** Size for the HTML input elements. */
  size?: TFieldSize;
  /** Initial state for input fields */
  statuses?: ('base' | 'error')[];
  /** Initial state for the input */
  status?: 'base' | 'error';
  innerControlsWidth?: TControlWidth;
}

const hasRealTime = (realTime: TRealtimeState) => realTime !== 'hidden';

export const DateTimeRangeInput: React.FC<DateTimeRangeInputProps> = ({
  'aria-controls': ariaControls,
  ariaLabel = ['from', 'to'],
  as,
  value,
  helper = '',
  label = '',
  helpers = [null, null],
  id,
  onChange = () => null,
  onKeyUp = () => null,
  onBlur = () => null,
  onClick = () => null,
  onRealTimeClick = () => null,
  placeholders = [null, null],
  realTime = 'hidden',
  required,
  showCalendarIcon,
  isOpen = false,
  size = 'md',
  statuses = ['base', 'base'],
  style,
  controlWidth,
  innerControlsWidth,
  status = 'base',
  hasMillis = false,
  ...dataProps
}) => {
  const theme = useTheme();

  return (
    <Field
      label={label}
      id={id}
      hasFloatingHelper
      helper={helper}
      hideLabel
      status={status}
      required={required}
      controlWidth={controlWidth ?? 'auto'}
      {...dataProps}
    >
      <StyledDateTimeRangeInput
        aria-controls={isOpen ? ariaControls : null}
        aria-haspopup
        as={as}
        css={style}
        id={id}
        $isOpen={isOpen}
        onClick={onClick}
        size={size}
        tabIndex={0}
        $controlWidth={controlWidth}
      >
        {showCalendarIcon && (
          <GICalendarMonthDayPlannerEvents
            color={theme.cmp.dateTimeRangeControl.arrow.color.fill}
            size={theme.cmp.dateTimeRangeControl.arrow.size.square[size]}
          />
        )}
        <Field
          controlWidth={
            innerControlsWidth ??
            (hasMillis
              ? theme.cmp.dateTimeRangeControl.input.size.width.withMillis[size]
              : theme.cmp.dateTimeRangeControl.input.size.width.withSeconds[
                  size
                ])
          }
          hasFloatingHelper
          helper={helpers[0]}
          hideLabel
          id={`${id}-input-from`}
          label={ariaLabel[0]}
          status={statuses[0]}
        >
          <InputControl._Input
            aria-label={ariaLabel[0]}
            id={`${id}-input-from`}
            onChange={(event) => {
              onChange(0, (event.target as HTMLInputElement).value);
            }}
            onKeyUp={(event) => {
              onKeyUp(0, event);
            }}
            onBlur={(event) => {
              onBlur(0, event);
            }}
            placeholder={placeholders[0]}
            size={size}
            status={statuses[0]}
            style={cssDateTimeRangeInput({ size, status: statuses[0] })}
            value={value[0] ?? ''}
          />
        </Field>
        <GIArrowRight
          color={theme.cmp.dateTimeRangeControl.arrow.color.fill}
          size={theme.cmp.dateTimeRangeControl.arrow.size.square[size]}
        />
        <Field
          controlWidth={
            innerControlsWidth ??
            (hasMillis
              ? theme.cmp.dateTimeRangeControl.input.size.width.withMillis[size]
              : theme.cmp.dateTimeRangeControl.input.size.width.withSeconds[
                  size
                ])
          }
          hasFloatingHelper
          helper={helpers[1]}
          hideLabel
          id={`${id}-input-to`}
          label={ariaLabel[1]}
          status={statuses[1]}
        >
          <InputControl._Input
            aria-label={ariaLabel[1]}
            id={`${id}-input-to`}
            onChange={(event) => {
              onChange(1, (event.target as HTMLInputElement).value);
            }}
            onKeyUp={(event) => {
              onKeyUp(1, event);
            }}
            onBlur={(event) => {
              onBlur(1, event);
            }}
            placeholder={placeholders[1]}
            size={size}
            status={statuses[1]}
            style={cssDateTimeRangeInput({ size, status: statuses[1] })}
            value={value[1] ?? ''}
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
