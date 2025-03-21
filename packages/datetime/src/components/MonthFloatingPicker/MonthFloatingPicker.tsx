import * as React from 'react';
import { useTheme } from 'styled-components';
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

import { defaultMonthFloatingPickerI18n } from './i18n';
import { TMonthFloatingPickerI18n } from './declarations';
import { useMergeI18n } from '../../hooks';

import { GIAngleLeft, GIAngleRight } from '@devoinc/genesys-icons';
import { YearSelector } from '../YearSelector';
import { YearSelectorInline } from '../YearSelectorInline';
import { MonthSelector } from '../MonthSelector';
import {
  MONTH_YEAR_SELECTORS_SIZE_MAP,
  PANEL_HEIGHT_SIZE_MAP,
  PANEL_WIDTH_SIZE_MAP,
} from './constants';

export interface MonthFloatingPickerProps
  extends Pick<
      PopoverProps,
      'appendTo' | 'isOpened' | 'placement' | 'onClose' | 'disableOutsideEvent'
    >,
    Pick<IGlobalAttrs, 'id'>,
    IDataAttrs,
    IStyledOverloadCss,
    IStyledPolymorphic {
  /** Internationalization object */
  i18n?: TMonthFloatingPickerI18n;
  /** Show the prev month button. */
  hasPrevMonthButton?: boolean;
  /** Show the next month button. */
  hasNextMonthButton?: boolean;
  /** Function called when change the current month date. */
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
  appendTo,
  as,
  closeAfterSelect = true,
  disableOutsideEvent = false,
  hasNextMonthButton = true,
  hasPrevMonthButton = true,
  i18n: userI18n = defaultMonthFloatingPickerI18n,
  id,
  isOpened,
  maxDate = endOfMonth(nowDate),
  minDate = startOfMonth(subMonths(nowDate, 24)),
  onChange = () => null,
  onClose,
  placement = 'bottom-start',
  size = 'md',
  style,
  value = nowDate,
  yearSelectorInline = false,
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
  const popoverId = id ? `${id}__popover` : null;
  const theme = useTheme();

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
        id={popoverId}
        isOpened={isOpened}
        placement={placement}
        onClose={() => {
          if (onClose) {
            onClose();
          }
        }}
      >
        {({ ref, isOpened, setOpened }) => (
          <Button
            ref={ref}
            aria-controls={popoverId}
            aria-expanded={isOpened}
            aria-label={i18n.inputMonth}
            id={id ? `${id}__trigger` : null}
            colorScheme={'quiet'}
            onClick={() => {
              setState(yearSelectorInline ? 'month' : 'year');
              setOpened(true);
            }}
            size={size}
            state={isOpened ? 'expanded' : undefined}
          >
            {format(value, 'MMM yyyy')}
          </Button>
        )}
        {({ setOpened }) =>
          state !== 'idle' && (
            <Popover.Panel
              maxWidth={null}
              minWidth={null}
              padding="0"
              width={!yearSelectorInline && PANEL_WIDTH_SIZE_MAP[size]}
              maxHeight={!yearSelectorInline && PANEL_HEIGHT_SIZE_MAP[size]}
            >
              <Panel.Body
                padding="cmp-xs"
                removeSpace={true}
                hasScrollSpacing={false}
              >
                <Grid
                  gridTemplateColumns={'1fr 1fr 1fr'}
                  gap={theme.alias.space.cmp.xs}
                >
                  {state === 'year' ? (
                    <YearSelector
                      minDate={minDate}
                      maxDate={maxDate}
                      value={valueDate}
                      onChange={(newValue) => {
                        onChange(newValue);
                        setState('month');
                      }}
                      size={MONTH_YEAR_SELECTORS_SIZE_MAP[size]}
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
                            size={size}
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
                        size={MONTH_YEAR_SELECTORS_SIZE_MAP[size]}
                      />
                    </>
                  )}
                </Grid>
              </Panel.Body>
            </Popover.Panel>
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
