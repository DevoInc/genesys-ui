import * as React from 'react';
import { set, getYear, getMonth, getDate, addMonths } from 'date-fns';

import {
  Box,
  Flex,
  HFlex,
  VFlex,
  type IGlobalAriaAttrs,
  type IGlobalAttrs,
  type IStyledOverloadCss,
  type IStyledPolymorphic,
} from '@devoinc/genesys-ui';

import { Presets, type PresetsProps } from '../Presets';
import {
  MonthSelector,
  useMonthSelectorRange,
  type MonthSelectorProps,
} from '../MonthSelector';
import { Time, type TimeProps } from '../Time';
import { Calendar, type CalendarProps, rangeBehavior } from '../Calendar';
import { parseAllDates } from '../../parsers';
import { TDateTimeRangeSource } from './declarations';
import {
  DATE_TIME_RANGE_SOURCE_CAL_LEFT,
  DATE_TIME_RANGE_SOURCE_CAL_RIGHT,
  DATE_TIME_RANGE_SOURCE_TIME_LEFT,
  DATE_TIME_RANGE_SOURCE_TIME_RIGHT,
} from './constants';
import { TPreset } from '../Presets/declarations';

export interface DateTimeRangeProps
  extends Pick<CalendarProps, 'monthDate' | 'parseDate' | 'value' | 'weekDays'>,
    Pick<TimeProps, 'hasMillis' | 'hasSeconds'>,
    Pick<MonthSelectorProps, 'ariaLabelNextMonth' | 'ariaLabelPrevMonth'>,
    Pick<PresetsProps, 'presets'>,
    Required<Pick<IGlobalAttrs, 'id'>>,
    IStyledOverloadCss,
    IStyledPolymorphic {
  /** aria-label attribute for from month input. */
  ariaLabelFromMonth?: IGlobalAriaAttrs['aria-label'];
  /** aria-label attribute for from time input. */
  ariaLabelFromTime?: IGlobalAriaAttrs['aria-label'];
  /** aria-label attribute for to month input. */
  ariaLabelToMonth?: IGlobalAriaAttrs['aria-label'];
  /** aria-label attribute for to time input. */
  ariaLabelToTime?: IGlobalAriaAttrs['aria-label'];
  /**  Show the time input HTML element. */
  hasTime?: boolean;
  /** Function called when clicking a cell or editing a time input HTML.  */
  onChange?: (value: (number | Date)[], source: TDateTimeRangeSource) => void;
  /** Placeholder for the presets list */
  presetsPlaceholder?: PresetsProps['placeholder'];
  /** Function called when the displayed month is changed (the left one). One
   * of `number` or `Date`. */
  onChangeMonthDate?: (monthDate: number | Date) => void;
  /** Function called when clicking an option from preset date list.  */
  onChangePreset?: (preset: string) => void;
  /** Selected preset */
  preset?: string;
}

export const DateTimeRange: React.FC<DateTimeRangeProps> = ({
  ariaLabelNextMonth = 'Go to the next month',
  ariaLabelPrevMonth = 'Go to the previous month',
  ariaLabelFromMonth = 'From month',
  ariaLabelFromTime = 'From time',
  ariaLabelToMonth = 'To month',
  ariaLabelToTime = 'To time',
  as,
  monthDate = new Date(),
  onChangeMonthDate,
  hasMillis = false,
  hasSeconds = true,
  hasTime = true,
  id,
  onChange,
  value = [new Date(), new Date()],
  parseDate = parseAllDates,
  weekDays,
  presetsPlaceholder,
  presets,
  preset,
  onChangePreset = () => null,
  styles,
}) => {
  const {
    onClickNextMonth,
    onClickPrevMonth,
    onChangeMonthLeft,
    onChangeMonthRight,
  } = useMonthSelectorRange({ monthDate, onChangeMonthDate });
  const [hoverDay, setHoverDay] = React.useState<number>(null);

  const onMouseEnterCallback = React.useCallback((ts: number) => {
    setHoverDay(ts);
  }, []);

  const onMouseLeaveCallback = React.useCallback(() => {
    setHoverDay(null);
  }, []);

  return (
    <HFlex as={as} alignItems={'flex-start'} styles={styles}>
      <VFlex flex={`1 1 ${presets ? '35%' : '50%'}`} alignItems="stretch">
        <MonthSelector
          ariaLabelInput={ariaLabelFromMonth}
          ariaLabelPrevMonth={ariaLabelPrevMonth}
          hasNextMonthButton={false}
          id={`${id}-month-from`}
          onChange={onChangeMonthLeft}
          onClickPrevMonth={onClickPrevMonth}
          size="sm"
          value={monthDate}
        />
        <Box height={'165px'}>
          <Calendar
            monthDate={monthDate}
            disableHoverDay={true}
            onClick={(dt) => {
              onChange(
                rangeBehavior(
                  value,
                  set(dt, {
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    milliseconds: 0,
                  }),
                ),
                DATE_TIME_RANGE_SOURCE_CAL_LEFT,
              );
            }}
            value={value}
            hasLeftHoverEffect={value.length === 1}
            hasRightHoverEffect={value.length === 1}
            parseDate={parseDate}
            weekDays={weekDays}
            hoverDay={hoverDay}
            onMouseEnter={onMouseEnterCallback}
            onMouseLeave={onMouseLeaveCallback}
          />
        </Box>
        {hasTime && (
          <Flex justifyContent={'flex-end'}>
            <Time
              aria-label={ariaLabelFromTime}
              hasMillis={hasMillis}
              hasSeconds={hasSeconds}
              id={`${id}-time-from`}
              onChange={(dt) => {
                onChange(
                  [
                    set(dt, {
                      year: getYear(value[0]),
                      month: getMonth(value[0]),
                      date: getDate(value[0]),
                    }),
                    value[1],
                  ],
                  DATE_TIME_RANGE_SOURCE_TIME_LEFT,
                );
              }}
              size="sm"
              value={value.length >= 2 ? value[0] : null}
              disabled={value.length < 2}
            />
          </Flex>
        )}
      </VFlex>
      <VFlex flex={`1 1 ${presets ? '35%' : '50%'}`} alignItems="stretch">
        <MonthSelector
          ariaLabelInput={ariaLabelToMonth}
          ariaLabelNextMonth={ariaLabelNextMonth}
          hasPrevMonthButton={false}
          id={`${id}-month-to`}
          onChange={onChangeMonthRight}
          onClickNextMonth={onClickNextMonth}
          size="sm"
          value={addMonths(monthDate, 1)}
        />
        <Box height={'165px'}>
          <Calendar
            monthDate={addMonths(monthDate, 1)}
            disableHoverDay={true}
            onClick={(dt) => {
              onChange(
                rangeBehavior(
                  value,
                  set(dt, {
                    hours: 23,
                    minutes: 59,
                    seconds: 59,
                    milliseconds: 999,
                  }),
                ),
                DATE_TIME_RANGE_SOURCE_CAL_RIGHT,
              );
            }}
            value={value}
            hasLeftHoverEffect={value.length === 1}
            hasRightHoverEffect={value.length === 1}
            parseDate={parseDate}
            weekDays={weekDays}
            hoverDay={hoverDay}
            onMouseEnter={onMouseEnterCallback}
            onMouseLeave={onMouseLeaveCallback}
          />
        </Box>
        {hasTime && (
          <Flex>
            <Time
              aria-label={ariaLabelToTime}
              hasMillis={hasMillis}
              hasSeconds={hasSeconds}
              id={`${id}-time-to`}
              onChange={(dt) => {
                onChange(
                  [
                    value[0],
                    set(dt, {
                      year: getYear(value[1]),
                      month: getMonth(value[1]),
                      date: getDate(value[1]),
                    }),
                  ],
                  DATE_TIME_RANGE_SOURCE_TIME_RIGHT,
                );
              }}
              size="sm"
              value={value.length >= 2 ? value[1] : null}
              disabled={value.length < 2}
            />
          </Flex>
        )}
      </VFlex>
      {presets && (
        <VFlex flex={'1 1 30%'} alignItems="stretch" minWidth="16rem">
          <Presets
            value={preset}
            id={`${id}-presets`}
            maxMenuHeight={224}
            placeholder={presetsPlaceholder}
            presets={presets}
            onChange={(newPreset) => {
              onChangePreset(newPreset);
            }}
          />
        </VFlex>
      )}
    </HFlex>
  );
};
