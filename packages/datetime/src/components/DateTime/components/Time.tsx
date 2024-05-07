import * as React from 'react';
import { format, set } from 'date-fns';

import {
  TFieldSize,
  Flex,
  IGlobalAriaAttrs,
  IGlobalAttrs,
  InputControl,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '@devoinc/genesys-ui';

import type { ITime, TDatetime } from '../../../declarations';
import { getFormatTimeStr, toTimestamp } from '../../../helpers';
import { isSameDay } from '../../Calendar/validations';

export interface TimeProps
  extends Pick<ITime, 'maxDate' | 'minDate'>,
    Required<Pick<IGlobalAriaAttrs, 'aria-label'>>,
    Pick<IGlobalAttrs, 'id'>,
    Pick<ITime, 'hasMillis' | 'hasSeconds'>,
    IStyledOverloadCss,
    IStyledPolymorphic {
  /** Function called when change the time value.  */
  onChange: (ts: number) => void;
  /** The size of the Time, specially the input. */
  size?: TFieldSize;
  /** Initial value. One of `number` or `Date`. */
  value?: TDatetime;
}

export const Time: React.FC<TimeProps> = ({
  'aria-label': ariaLabel,
  as,
  hasMillis = false,
  hasSeconds = true,
  id,
  maxDate: maxMonth,
  minDate: minMonth,
  onChange,
  size = 'md',
  styles,
  value: defaultValue = new Date().getTime(),
}) => {
  const value = toTimestamp(defaultValue);
  const minDate = toTimestamp(minMonth);
  const maxDate = toTimestamp(maxMonth);

  const tmpValue = value ? value : new Date().getTime();

  const [min, setMin] = React.useState<string>();
  const [max, setMax] = React.useState<string>();

  React.useEffect(() => {
    setMin(
      minDate && isSameDay(tmpValue, minDate)
        ? format(new Date(minDate), getFormatTimeStr(hasSeconds, hasMillis))
        : null,
    );
    setMax(
      maxDate && isSameDay(tmpValue, maxDate)
        ? format(new Date(maxDate), getFormatTimeStr(hasSeconds, hasMillis))
        : null,
    );
  }, [tmpValue, hasMillis, hasSeconds, maxDate, minDate]);

  return (
    <Flex as={as} justifyContent="center" styles={styles}>
      <Flex.Item flex="0 0 auto" minWidth="9.2rem">
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
          size={size}
          step={hasSeconds ? 1 : null}
          type={'time'}
          value={format(tmpValue, getFormatTimeStr(hasSeconds, hasMillis))}
        />
      </Flex.Item>
    </Flex>
  );
};
