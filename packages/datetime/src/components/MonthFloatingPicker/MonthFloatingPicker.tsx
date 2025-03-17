import * as React from 'react';
import {
  addMonths,
  format,
  subMonths,
  endOfMonth,
  startOfMonth,
  isWithinInterval,
} from 'date-fns';

import {
  type TFieldSize,
  type IGlobalAttrs,
  HFlex,
  IconButton,
  type IStyledOverloadCss,
  type IStyledPolymorphic,
  type IDataAttrs,
  Panel,
  Button,
  Grid,
  Popover,
  PopoverProps,
} from '@devoinc/genesys-ui';

import { GIAngleLeft, GIAngleRight } from '@devoinc/genesys-icons';
import { defaultMonthFloatingPickerI18n } from './i18n';
import { useMergeI18n } from '../../hooks';
import { TMonthFloatingPickerI18n } from './declarations';
import { YearSelector } from '../YearSelector';
import { YearSelectorInline } from '../YearSelectorInline';
import { MonthSelector } from '../MonthSelector';

export interface MonthFloatingPickerProps
  extends Pick<
      PopoverProps,
      'appendTo' | 'isOpened' | 'placement' | 'onClose' | 'disableOutsideEvent'
    >,
    Pick<IGlobalAttrs, 'id'>,
    IDataAttrs,
    IStyledOverloadCss,
    IStyledPolymorphic {
  /** Internacionalization object */
  i18n?: TMonthFloatingPickerI18n;
  /** Show the prev month button. */
  hasPrevMonthButton?: boolean;
  /** Show the next month button. */
  hasNextMonthButton?: boolean;
  /** Function called when change the currently month date. */
  onChange?: (ts: number) => void;
  /** The size of the different elements of the Month: inputs, buttons... etc. */
  size?: TFieldSize;
  /** Initial value. One of `number` or `Date`. */
  value?: Date | number;
  /** The latest month to accept. One of `number` or `Date`. */
  maxDate?: number | Date;
  /** The earliest month to accept. One of `number` or `Date`. */
  minDate?: number | Date;
  yearSelectorInline?: boolean;
  closeAfterSelect?: boolean;
}

const nowDate = new Date();

export const MonthFloatingPicker: React.FC<MonthFloatingPickerProps> = ({
  i18n: userI18n = defaultMonthFloatingPickerI18n,
  as,
  appendTo,
  isOpened,
  disableOutsideEvent = false,
  placement = 'bottom-start',
  onClose,
  hasPrevMonthButton = true,
  hasNextMonthButton = true,
  id,
  maxDate = endOfMonth(nowDate),
  minDate = startOfMonth(subMonths(nowDate, 24)),
  value = nowDate,
  onChange = () => null,
  size = 'md',
  yearSelectorInline = false,
  closeAfterSelect = true,
  style,
  ...dataProps
}) => {
  const i18n = useMergeI18n(
    userI18n,
    defaultMonthFloatingPickerI18n,
  ) as TMonthFloatingPickerI18n;
  const [state, setState] = React.useState('idle');

  const valueDate = new Date(value);
  const valuePrevMonth = subMonths(value, 1);
  const valueNextMonth = addMonths(value, 1);

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
          onClick={() => {
            onChange(valuePrevMonth.valueOf());
          }}
          size={size}
          state={
            isWithinInterval(valuePrevMonth, { start: minDate, end: maxDate })
              ? 'enabled'
              : 'disabled'
          }
          tooltip={i18n.prevMonth}
        />
      )}
      <Popover
        appendTo={appendTo}
        disableOutsideEvent={disableOutsideEvent}
        id={`${id}__popover`}
        isOpened={isOpened}
        placement={placement}
        onClose={() => {
          if (onClose) {
            onClose();
          }
        }}
      >
        {({ ref, setOpened }) => (
          <Button
            ref={ref}
            aria-label={i18n.inputMonth}
            id={id}
            colorScheme={'quiet'}
            onClick={() => {
              setState(yearSelectorInline ? 'month' : 'year');
              setOpened(true);
            }}
          >
            {format(value, 'MMM yyyy')}
          </Button>
        )}
        {({ setOpened }) =>
          state !== 'idle' && (
            <Panel
              width={'210px'}
              height={yearSelectorInline ? '200px' : '160px'}
            >
              <Panel.Body
                removeSpace={true}
                hasScrollSpacing={false}
                padding={'cmp-xs'}
              >
                <Grid gridTemplateColumns={'1fr 1fr 1fr'} gap={'1rem'}>
                  {state === 'year' ? (
                    <YearSelector
                      minDate={minDate}
                      maxDate={maxDate}
                      value={valueDate}
                      onChange={(newValue) => {
                        onChange(newValue);
                        setState('month');
                      }}
                    />
                  ) : (
                    <>
                      {yearSelectorInline && (
                        <Grid.Item gridColumnStart={1} gridColumnEnd={4}>
                          <YearSelectorInline
                            value={valueDate}
                            i18n={i18n}
                            onChange={(newValue) => {
                              onChange(newValue);
                            }}
                            minDate={minDate}
                            maxDate={maxDate}
                          />
                        </Grid.Item>
                      )}
                      <MonthSelector
                        value={valueDate}
                        minDate={minDate}
                        maxDate={maxDate}
                        onChange={(newValue) => {
                          onChange(newValue);
                          if (closeAfterSelect) {
                            setState('idle');
                            setOpened(false);
                          }
                        }}
                      />
                    </>
                  )}
                </Grid>
              </Panel.Body>
            </Panel>
          )
        }
      </Popover>
      {hasNextMonthButton && (
        <IconButton
          aria-label={i18n.nextMonth}
          colorScheme={'quiet'}
          hasBoldIcon
          icon={<GIAngleRight />}
          onClick={() => {
            if (onChange) {
              onChange(valueNextMonth.valueOf());
            }
          }}
          size={size}
          state={
            isWithinInterval(valueNextMonth, { start: minDate, end: maxDate })
              ? 'enabled'
              : 'disabled'
          }
          tooltip={i18n.nextMonth}
        />
      )}
    </HFlex>
  );
};
