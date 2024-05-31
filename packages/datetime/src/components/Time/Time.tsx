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

import type { ITime } from '../../declarations';
import { getFormatTimeStr } from '../../helpers';

export interface TimeProps
  extends Required<Pick<IGlobalAriaAttrs, 'aria-label'>>,
    Pick<IGlobalAttrs, 'id'>,
    Pick<ITime, 'hasMillis' | 'hasSeconds'>,
    IStyledOverloadCss,
    IStyledPolymorphic {
  /** Function called when change the time value.  */
  onChange: (ts: number) => void;
  /** The size of the Time, specially the input. */
  size?: TFieldSize;
  /** Initial value. One of `number` or `Date`. */
  value?: Date | number;
  disabled?: boolean;
}

export const Time: React.FC<TimeProps> = ({
  'aria-label': ariaLabel,
  as,
  hasMillis = false,
  hasSeconds = true,
  id,
  onChange,
  size = 'md',
  styles,
  value,
  disabled = false,
}) => {
  return (
    <Flex as={as} justifyContent="center" styles={styles}>
      <Flex.Item flex="0 0 auto" minWidth="9.2rem">
        <InputControl
          aria-label={ariaLabel}
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
          step={hasSeconds ? 1 : null}
          type={'time'}
          value={
            value === null || value === undefined
              ? null
              : format(value, getFormatTimeStr(hasSeconds, hasMillis))
          }
          disabled={disabled}
        />
      </Flex.Item>
    </Flex>
  );
};
