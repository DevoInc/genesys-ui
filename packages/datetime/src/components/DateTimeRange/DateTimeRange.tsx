import * as React from 'react';
import { set, getYear, getMonth, getDate, addMonths } from 'date-fns';

import {
  Box,
  Flex,
  HFlex,
  VFlex,
  type IGlobalAttrs,
  type IStyledOverloadCss,
  type IStyledPolymorphic,
  type IDataAttrs,
} from '@devoinc/genesys-ui';

import { Presets, type PresetsProps } from '../Presets';
import { MonthSelector, useMonthSelectorRange } from '../MonthSelector';
import { Time, type TimeProps } from '../Time';
import { Calendar, type CalendarProps, rangeBehavior } from '../Calendar';
import { parseAllDates } from '../../parsers';
import { TDateTimeRangeI18n, TDateTimeRangeSource } from './declarations';
import {
  DATE_TIME_RANGE_SOURCE_CAL_LEFT,
  DATE_TIME_RANGE_SOURCE_CAL_RIGHT,
  DATE_TIME_RANGE_SOURCE_TIME_LEFT,
  DATE_TIME_RANGE_SOURCE_TIME_RIGHT,
} from './constants';
import { defaultDateTimeRangeI18n } from './i18n';
import { useMergeI18n } from '../../hooks';
import type { TDateRange } from '../../declarations';

export interface DateTimeRangeProps
  extends Pick<CalendarProps, 'monthDate' | 'parseDate' | 'weekDays'>,
    Pick<TimeProps, 'hasMillis' | 'hasSeconds'>,
    Pick<PresetsProps, 'presets'>,
    Required<Pick<IGlobalAttrs, 'id'>>,
    IDataAttrs,
    IStyledOverloadCss,
    IStyledPolymorphic {
  /** Internacionalization object */
  i18n?: TDateTimeRangeI18n;
  /**  Show the time input HTML element. */
  hasTime?: boolean;
  /** Function called when clicking a cell or editing a time input HTML.  */
  onChange?: (value: TDateRange, source: TDateTimeRangeSource) => void;
  /** Placeholder for the presets list */
  presetsPlaceholder?: PresetsProps['placeholder'];
  /** Function called when the displayed month is changed (the left one). One
   * of `number` or `Date`. */
  onChangeMonthDate?: (monthDate: number | Date) => void;
  value?: TDateRange;
}

export const DateTimeRange: React.FC<DateTimeRangeProps> = ({
  i18n: userI18n = defaultDateTimeRangeI18n,
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
  style,
  ...dataProps
}) => {
  const i18n = useMergeI18n(
    userI18n,
    defaultDateTimeRangeI18n,
  ) as TDateTimeRangeI18n;
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

  const canCalendarRender = React.useMemo(
    () => value.length > 0 && value.every((x) => typeof x !== 'string'),
    [value],
  );

  return (
    <HFlex as={as} alignItems={'flex-start'} style={style} {...dataProps}>
      <VFlex flex={`1 1 ${presets ? '35%' : '50%'}`} alignItems="stretch">
        <MonthSelector
          i18n={i18n}
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
                  value as (number | Date)[],
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
            value={canCalendarRender ? (value as (number | Date)[]) : []}
            hasLeftHoverEffect={canCalendarRender ? value.length === 1 : false}
            hasRightHoverEffect={canCalendarRender ? value.length === 1 : false}
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
              aria-label={i18n.fromTime}
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
              value={canCalendarRender && value.length >= 2 ? value[0] : ''}
              disabled={!canCalendarRender || value.length < 2}
            />
          </Flex>
        )}
      </VFlex>
      <VFlex flex={`1 1 ${presets ? '35%' : '50%'}`} alignItems="stretch">
        <MonthSelector
          i18n={i18n}
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
            value={canCalendarRender ? value : []}
            hasLeftHoverEffect={canCalendarRender ? value.length === 1 : false}
            hasRightHoverEffect={canCalendarRender ? value.length === 1 : false}
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
              aria-label={i18n.toTime}
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
              value={canCalendarRender && value.length >= 2 ? value[1] : ''}
              disabled={!canCalendarRender || value.length < 2}
            />
          </Flex>
        )}
      </VFlex>
      {presets && (
        <VFlex flex={'1 1 30%'} alignItems="stretch" minWidth="16rem">
          <Presets
            value={canCalendarRender ? [] : value}
            id={`${id}-presets`}
            maxMenuHeight={224}
            placeholder={presetsPlaceholder}
            presets={presets}
            onChange={(newValue) => {
              onChange(newValue, 'presets');
            }}
          />
        </VFlex>
      )}
    </HFlex>
  );
};
