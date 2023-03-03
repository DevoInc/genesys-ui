import * as React from 'react';
import { format, set } from 'date-fns';

import {
  GlobalAriaProps,
  GlobalAttrProps,
  InputControl,
} from '@devoinc/genesys-ui';

import { CalendarProps } from '../../Calendar';
import { getFormatTimeStr } from '../utils/format';
import { isSameDay } from '../../Calendar/validations';
import { toTimestamp } from '../../utils';
import { Datetime } from '../../declarations';

export interface TimeProps
  extends Pick<CalendarProps, 'maxDate' | 'minDate'>,
    Required<Pick<GlobalAriaProps, 'aria-label'>>,
    Pick<GlobalAttrProps, 'id'> {
  /** If hasTime, allow to show the milliseconds. */
  hasMillis?: boolean;
  /** If hasTime, allow to show the seconds. */
  hasSeconds?: boolean;
  /** Function called when change the time value.  */
  onChange: (ts: number) => void;
  /** Initial value. One of `number` or `Date`. */
  value?: Datetime;
}

export const Time: React.FC<TimeProps> = ({
  'aria-label': ariaLabel,
  hasMillis = false,
  hasSeconds = true,
  maxDate: maxMonth,
  minDate: minMonth,
  onChange,
  value: defaultValue = new Date().getTime(),
  id,
}) => {
  const value = toTimestamp(defaultValue);
  const minDate = toTimestamp(minMonth);
  const maxDate = toTimestamp(maxMonth);

  const tmpValue = value ? value : new Date().getTime();

  const [min, setMin] = React.useState(null);
  const [max, setMax] = React.useState(null);

  React.useEffect(() => {
    setMin(
      minDate && isSameDay(tmpValue, minDate)
        ? format(new Date(minDate), getFormatTimeStr(hasSeconds, hasMillis))
        : null
    );
    setMax(
      maxDate && isSameDay(tmpValue, maxDate)
        ? format(new Date(maxDate), getFormatTimeStr(hasSeconds, hasMillis))
        : null
    );
  }, [tmpValue, hasMillis, hasSeconds, maxDate, minDate]);

  return (
    <InputControl
      aria-label={ariaLabel}
      id={id}
      max={max}
      min={min}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const isValid = target.validity.valid;
        const isOverflow = target.validity.rangeOverflow;

        const currentValue = (
          isValid ? target.value : isOverflow ? max : min
        ).split(':');

        const time = {
          hours: Number(currentValue[0]),
          minutes: Number(currentValue[1]),
          seconds: 0,
          milliseconds: 0,
        };

        if (hasSeconds && currentValue[2]) {
          const secs = currentValue[2].split('.');
          time.seconds = Number(secs[0]);
          if (hasMillis) {
            time.milliseconds = Number(secs[1]);
          }
        }
        onChange(set(new Date(tmpValue), time).getTime());
      }}
      step={hasSeconds ? 1 : null}
      type={'time'}
      value={format(tmpValue, getFormatTimeStr(hasSeconds, hasMillis))}
    />
  );
};
