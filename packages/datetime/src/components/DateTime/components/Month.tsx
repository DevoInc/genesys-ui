import * as React from 'react';
import {
  set,
  addDays,
  addMonths,
  endOfMonth,
  format,
  startOfMonth,
  subDays,
  subMonths,
  startOfDay,
} from 'date-fns';

import {
  GlobalAriaProps,
  GlobalAttrProps,
  HFlex,
  IconButton,
  InputControl,
} from '@devoinc/genesys-ui';
import { CalendarProps } from '../../Calendar';
import { Datetime } from '../../declarations';
import { toTimestamp } from '../../utils';

export interface MonthProps
  extends Pick<CalendarProps, 'maxDate' | 'minDate'>,
    Required<Pick<GlobalAriaProps, 'aria-label'>>,
    Pick<GlobalAttrProps, 'id'> {
  /** Show the prev month button. */
  hasPrevMonthButton?: boolean;
  /** Show the next month button. */
  hasNextMonthButton?: boolean;
  /** Function called when change the currently month date. */
  onChange?: (ts: number) => void;
  /** Function called when click on previous month button. */
  onClickPrevMonth?: () => void;
  /** Function called when click on next month button. */
  onClickNextMonth?: () => void;
  /** Initial value. One of `number` or `Date`. */
  value?: Datetime;
}

export const Month: React.FC<MonthProps> = ({
  'aria-label': ariaLabel,
  hasPrevMonthButton = true,
  hasNextMonthButton = true,
  id,
  maxDate: maxMonth,
  minDate: minMonth,
  value: defaultValue = new Date().getTime(),
  onChange,
  onClickPrevMonth,
  onClickNextMonth,
}) => {
  const value = toTimestamp(defaultValue);
  const minDate = toTimestamp(minMonth);
  const maxDate = toTimestamp(maxMonth);

  const min = minDate ? format(new Date(minDate), 'yyyy-MM') : null;
  const max = maxDate ? format(new Date(maxDate), 'yyyy-MM') : null;

  const stateMax =
    startOfMonth(addMonths(maxDate, 1)) <=
    addDays(startOfDay(endOfMonth(value)), 1)
      ? 'disabled'
      : 'enabled';

  const stateMin =
    endOfMonth(subMonths(minDate, 1)) >= subDays(startOfMonth(value), 1)
      ? 'disabled'
      : 'enabled';

  const onChangeMonth = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value) {
        const elements = event.target.value.split('-');
        onChange(
          set(new Date(value), {
            year: Number(elements[0]),
            month: Number(elements[1]) - 1,
          }).getTime()
        );
      } else {
        onChange(value);
      }
    },
    [onChange, value]
  );

  return (
    <HFlex>
      {hasPrevMonthButton && (
        <IconButton
          colorScheme={'quiet'}
          hasBoldIcon
          icon="arrow_left"
          onClick={onClickPrevMonth}
          size="sm"
          state={stateMin}
          title={'prev-month'}
        />
      )}
      <InputControl
        aria-label={ariaLabel}
        id={id}
        max={max}
        min={min}
        onChange={onChangeMonth}
        type={'month'}
        value={format(value, 'yyyy-MM')}
      />
      {hasNextMonthButton && (
        <IconButton
          colorScheme={'quiet'}
          hasBoldIcon
          icon="arrow_right"
          onClick={onClickNextMonth}
          size="sm"
          state={stateMax}
          title={'next-month'}
        />
      )}
    </HFlex>
  );
};
