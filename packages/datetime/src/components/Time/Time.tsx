import * as React from 'react';
import { set } from 'date-fns';

import {
  Flex,
  InputControl,
  type TFieldSize,
  type IGlobalAttrs,
  type IStyledOverloadCss,
  type IStyledPolymorphic,
  type IDataAttrs,
} from '@devoinc/genesys-ui';

import type { ITime, TDate } from '../../declarations';
import { getFormatTimeStr, formatDate } from '../../helpers';
import { TTimeI18n } from './declarations';
import { defaultTimeI18n } from './i18n';
import { useMergeI18n } from '../../hooks';

export interface TimeProps
  extends Pick<IGlobalAttrs, 'id'>,
    Pick<ITime, 'hasMillis' | 'hasSeconds' | 'minDate' | 'maxDate'>,
    IDataAttrs,
    IStyledOverloadCss,
    IStyledPolymorphic {
  /** Function called when change the time value.  */
  onChange: (ts: number) => void;
  /** The size of the Time, specially the input. */
  size?: TFieldSize;
  /** Initial value. One of `number` or `Date`. */
  value?: TDate;
  /** Diable the time field */
  disabled?: boolean;
  /** Internacionalization object */
  i18n?: TTimeI18n;
}

export const Time: React.FC<TimeProps> = ({
  as,
  hasMillis = false,
  hasSeconds = true,
  id,
  onChange,
  size = 'md',
  style,
  value = '',
  disabled = false,
  i18n: userI18n = defaultTimeI18n,
  minDate,
  maxDate,
  ...dataProps
}) => {
  const i18n = useMergeI18n(userI18n, defaultTimeI18n) as TTimeI18n;
  return (
    <Flex as={as} justifyContent="center" style={style} {...dataProps}>
      <Flex.Item
        flex="0 0 auto"
        minWidth={hasMillis ? '16rem' : hasSeconds ? '13rem' : '11rem'}
      >
        <InputControl
          aria-label={i18n.time}
          id={id}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const target = event.target;

            const currentValue = target.value.split(':');

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

            onChange(set(new Date(value), time).getTime());
          }}
          size={size}
          step={hasMillis ? '0.001' : hasSeconds ? '1' : null}
          type={'time'}
          value={
            value && formatDate(value, getFormatTimeStr(hasSeconds, hasMillis))
          }
          disabled={disabled}
          min={
            minDate &&
            formatDate(minDate, getFormatTimeStr(hasSeconds, hasMillis))
          }
          max={
            maxDate &&
            formatDate(maxDate, getFormatTimeStr(hasSeconds, hasMillis))
          }
        />
      </Flex.Item>
    </Flex>
  );
};
