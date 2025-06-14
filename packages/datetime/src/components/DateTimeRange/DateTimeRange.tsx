import * as React from 'react';
import {
  set,
  getYear,
  getMonth,
  getDate,
  addMonths,
  subMonths,
} from 'date-fns';
import { tz as tzFn } from '@date-fns/tz';

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
import { Time, type TimeProps } from '../Time';
import { type CalendarProps, rangeBehavior } from '../Calendar';
import { tautologyParseDate } from '../../parsers';
import type { TDateTimeRangeI18n, TDateTimeRangeSource } from './declarations';
import {
  DATE_TIME_RANGE_SOURCE_CAL_LEFT,
  DATE_TIME_RANGE_SOURCE_CAL_RIGHT,
  DATE_TIME_RANGE_SOURCE_TIME_LEFT,
  DATE_TIME_RANGE_SOURCE_TIME_RIGHT,
} from './constants';
import { defaultDateTimeRangeI18n } from './i18n';
import { useMergeI18n } from '../../hooks';
import type {
  TDateRange,
  IEndPointRangeTime,
  TCalendarDateRange,
} from '../../declarations';
import { MonthFloatingPicker } from '../MonthFloatingPicker';
import { isCalendarRange } from '../Calendar/helpers';
import { InternalCalendar } from '../Calendar/Calendar';
import { CalendarContextProvider } from '../Calendar/contexts';

export interface DateTimeRangeProps
  extends Pick<CalendarProps, 'monthDate' | 'parseDate' | 'weekDays'>,
    Pick<TimeProps, 'hasMillis' | 'hasSeconds'>,
    Required<Pick<IGlobalAttrs, 'id'>>,
    IDataAttrs,
    IStyledOverloadCss,
    IStyledPolymorphic {
  /** Custom list of presets values. */
  presets?: PresetsProps['presets'];
  /** Timezone */
  tz?: string;
  /** Internacionalization object */
  i18n?: TDateTimeRangeI18n;
  /**  Show the time input HTML element. */
  hasTime?: boolean;
  /**  Calendar for absolute dates, presets for relative dates or both. */
  mode?: 'calendar' | 'presets' | 'both';
  /** Function called when clicking a cell or editing a time input HTML.  */
  onChange?: (value: TDateRange, source: TDateTimeRangeSource) => void;
  /** Placeholder for the presets list */
  presetsPlaceholder?: PresetsProps['placeholder'];
  /** Function called when the displayed month is changed (the left one). One
   * of `number` or `Date`. */
  onChangeMonthDate?: (monthDate: number | Date) => void;
  value?: TDateRange;
  /** Default values for the time at the start of the range */
  startRangeDefault?: IEndPointRangeTime;
  /** Default values for the time at the end of the range */
  endRangeDefault?: IEndPointRangeTime;
}

export const DateTimeRange: React.FC<DateTimeRangeProps> = ({
  i18n: userI18n = {},
  tz = Intl.DateTimeFormat().resolvedOptions().timeZone,
  as,
  monthDate = new Date(),
  onChangeMonthDate,
  hasMillis = false,
  hasSeconds = true,
  hasTime = true,
  id,
  mode = 'both',
  onChange,
  value = [new Date(), new Date()],
  parseDate = tautologyParseDate,
  weekDays,
  presetsPlaceholder,
  presets = [],
  startRangeDefault = { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 },
  endRangeDefault = { hours: 23, minutes: 59, seconds: 59, milliseconds: 999 },
  style,
  ...dataProps
}) => {
  const i18n = useMergeI18n(
    userI18n,
    defaultDateTimeRangeI18n,
  ) as TDateTimeRangeI18n;

  const canCalendarRender = React.useMemo(
    () => isCalendarRange(value),
    [value],
  );

  return (
    <CalendarContextProvider>
      <HFlex as={as} alignItems={'flex-start'} style={style} {...dataProps}>
        {(mode === 'calendar' || mode === 'both') && (
          <VFlex flex={`1 1 ${presets ? '35%' : '50%'}`} alignItems="stretch">
            <MonthFloatingPicker
              i18n={i18n}
              appendTo={null}
              yearSelectorInline
              hasNextMonthButton={false}
              placement={'bottom-end'}
              id={`${id}-month-from`}
              onChange={(newMonthDate) => {
                onChangeMonthDate(newMonthDate);
              }}
              size="sm"
              value={monthDate}
              closeAfterSelect
            />
            <Box height={'165px'}>
              <InternalCalendar
                monthDate={monthDate}
                onClick={(ts) => {
                  onChange(
                    rangeBehavior({
                      range: value as (number | Date)[],
                      ts,
                      tz,
                      startRange: startRangeDefault,
                      endRange: endRangeDefault,
                    }),
                    DATE_TIME_RANGE_SOURCE_CAL_LEFT,
                  );
                }}
                value={canCalendarRender ? (value as TCalendarDateRange) : []}
                selectionLength={2}
                parseDate={parseDate}
                weekDays={weekDays}
                tz={tz}
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
        )}
        {(mode === 'calendar' || mode === 'both') && (
          <VFlex flex={`1 1 ${presets ? '35%' : '50%'}`} alignItems="stretch">
            <MonthFloatingPicker
              i18n={i18n}
              appendTo={null}
              yearSelectorInline
              hasPrevMonthButton={false}
              id={`${id}-month-to`}
              onChange={(newMonthDate) => {
                onChangeMonthDate(subMonths(newMonthDate, 1));
              }}
              size="sm"
              value={addMonths(monthDate, 1)}
              closeAfterSelect
            />
            <Box height={'165px'}>
              <InternalCalendar
                monthDate={addMonths(monthDate, 1, { in: tzFn(tz) })}
                onClick={(ts) => {
                  onChange(
                    rangeBehavior({
                      range: value as (number | Date)[],
                      ts,
                      tz,
                      startRange: startRangeDefault,
                      endRange: endRangeDefault,
                    }),
                    DATE_TIME_RANGE_SOURCE_CAL_RIGHT,
                  );
                }}
                value={canCalendarRender ? (value as TCalendarDateRange) : []}
                selectionLength={2}
                parseDate={parseDate}
                weekDays={weekDays}
                tz={tz}
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
        )}
        {(mode === 'presets' || mode === 'both') && (
          <VFlex flex={'1 1 30%'} alignItems="stretch" minWidth="16rem">
            <Presets
              value={value}
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
    </CalendarContextProvider>
  );
};
