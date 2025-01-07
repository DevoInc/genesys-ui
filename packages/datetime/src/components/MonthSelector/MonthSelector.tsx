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
  type TFieldSize,
  Flex,
  type IGlobalAttrs,
  HFlex,
  IconButton,
  InputControl,
  type IStyledOverloadCss,
  type IStyledPolymorphic,
  type IDataAttrs,
} from '@devoinc/genesys-ui';

import { toTimestamp } from '../../helpers';
import { GIAngleLeft, GIAngleRight } from '@devoinc/genesys-icons';
import { defaultMonthSelectorI18n } from './i18n';
import { useMergeI18n } from '../../hooks';
import { TMonthSelectorI18n } from './declarations';

export interface MonthSelectorProps
  extends Pick<IGlobalAttrs, 'id'>,
    IDataAttrs,
    IStyledOverloadCss,
    IStyledPolymorphic {
  /** Internacionalization object */
  i18n?: TMonthSelectorI18n;
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
  /** The size of the different elements of the Month: inputs, buttons... etc. */
  size?: TFieldSize;
  /** Initial value. One of `number` or `Date`. */
  value?: Date | number;
  /** The latest day to accept. One of `number` or `Date`. */
  maxDate?: number | Date;
  /** The earliest day to accept. One of `number` or `Date`. */
  minDate?: number | Date;
}

export const MonthSelector: React.FC<MonthSelectorProps> = ({
  i18n: userI18n = defaultMonthSelectorI18n,
  as,
  hasPrevMonthButton = true,
  hasNextMonthButton = true,
  id,
  maxDate,
  minDate,
  value: defaultValue = new Date().getTime(),
  onChange,
  onClickPrevMonth,
  onClickNextMonth,
  size = 'md',
  style,
  ...dataProps
}) => {
  const i18n = useMergeI18n(
    userI18n,
    defaultMonthSelectorI18n,
  ) as TMonthSelectorI18n;
  const value = toTimestamp(defaultValue);

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
          }).getTime(),
        );
      } else {
        onChange(value);
      }
    },
    [onChange, value],
  );

  return (
    <HFlex
      as={as}
      justifyContent="space-between"
      spacing="0"
      style={style}
      {...dataProps}
    >
      {hasPrevMonthButton && (
        <IconButton
          aria-label={i18n.prevMonth}
          colorScheme={'quiet'}
          hasBoldIcon
          icon={<GIAngleLeft />}
          onClick={onClickPrevMonth}
          size={size}
          state={stateMin}
          tooltip={i18n.prevMonth}
        />
      )}
      <Flex.Item
        position="relative"
        flex="0 0 auto"
        paddingLeft={hasPrevMonthButton ? 'cmp-xs' : null}
        paddingRight={hasNextMonthButton ? 'cmp-xs' : null}
        positionRight={
          hasPrevMonthButton && hasNextMonthButton
            ? null
            : hasPrevMonthButton
              ? '50%'
              : null
        }
        positionLeft={
          hasPrevMonthButton && hasNextMonthButton
            ? null
            : hasNextMonthButton
              ? '50%'
              : null
        }
        cssTranslate={
          hasPrevMonthButton && hasNextMonthButton
            ? null
            : hasPrevMonthButton
              ? '50%, 0'
              : '-50%, 0'
        }
        width={'16.8rem'}
      >
        <InputControl
          aria-label={i18n.inputMonth}
          id={id}
          max={maxDate ? format(maxDate, 'yyyy-MM') : null}
          min={minDate ? format(minDate, 'yyyy-MM') : null}
          onChange={onChangeMonth}
          size={size}
          type={'month'}
          value={format(value, 'yyyy-MM')}
        />
      </Flex.Item>
      {hasNextMonthButton && (
        <IconButton
          aria-label={i18n.nextMonth}
          colorScheme={'quiet'}
          hasBoldIcon
          icon={<GIAngleRight />}
          onClick={onClickNextMonth}
          size={size}
          state={stateMax}
          tooltip={i18n.nextMonth}
        />
      )}
    </HFlex>
  );
};
