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
import { durationToTime } from './durationToTime';

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
  /** Timezone */
  tz?: string;
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
  tz = Intl.DateTimeFormat().resolvedOptions().timeZone,
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
            if (event.target.value !== '') {
              const time = durationToTime(event.target.valueAsNumber);
              onChange(set(value, time).getTime());
            }
          }}
          size={size}
          step={hasMillis ? '0.001' : hasSeconds ? '1' : null}
          type={'time'}
          value={
            value &&
            formatDate({ format: getFormatTimeStr(hasSeconds, hasMillis), tz })(
              value,
            )
          }
          disabled={disabled}
          min={
            minDate &&
            formatDate({ format: getFormatTimeStr(hasSeconds, hasMillis), tz })(
              minDate,
            )
          }
          max={
            maxDate &&
            formatDate({ format: getFormatTimeStr(hasSeconds, hasMillis), tz })(
              maxDate,
            )
          }
        />
      </Flex.Item>
    </Flex>
  );
};
