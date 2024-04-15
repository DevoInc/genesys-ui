import * as React from 'react';
import { format } from 'date-fns';

import {
  Panel,
  Button,
  InputControl,
  type InputControlProps,
  type IGlobalAriaAttrs,
  type IGlobalAttrs,
  type IStyledOverloadCss,
  type IStyledPolymorphic,
  Popover,
  type PopoverProps,
} from '@devoinc/genesys-ui';

import { DateTime, type DateTimeProps } from '../DateTime';
import { getFormatTimeStr } from '../DateTime/utils/format';
import { toTimestamp } from '../utils';
import { GICalendarMonthDayPlannerEvents } from '@devoinc/genesys-icons';

export interface DateTimeFloatingPickerProps
  extends Pick<PopoverProps, 'appendTo' | 'isOpened' | 'onClose'>,
    Omit<DateTimeProps, 'onChange' | 'selectedDates'>,
    Pick<InputControlProps, 'onChange' | 'placeholder' | 'size'>,
    Pick<IGlobalAriaAttrs, 'aria-label'>,
    Pick<IGlobalAttrs, 'id'>,
    Pick<IStyledOverloadCss, 'styles'>,
    Pick<IStyledPolymorphic, 'as'> {
  /** Apply button text */
  applyButtonText?: string;
  /** Cancel button text */
  cancelButtonText?: string;
  /** Function called when Apply button is clicked. */
  onApply: (ts: number) => void;
  /** Function called when Cancel button is clicked. */
  onCancel: () => void;
  /** Function called when any enabled calendar cell is clicked. */
  onChangeCalendar: (ts: number) => void;
}

export const DateTimeFloatingPicker: React.FC<DateTimeFloatingPickerProps> = ({
  'aria-label': ariaLabel = 'datetime',
  appendTo,
  applyButtonText = 'Apply',
  as,
  cancelButtonText = 'Cancel',
  hasMillis = false,
  hasSeconds = true,
  hasTime = true,
  id,
  isOpened,
  onApply,
  onCancel,
  onChange,
  onChangeCalendar,
  onClose,
  placeholder,
  size,
  styles: customStyles,
  value: customValue,
  ...restDateTimeProps
}) => {
  const value = toTimestamp(customValue);

  const datetimeFormat = `yyyy-MM-dd ${
    hasTime ? getFormatTimeStr(hasSeconds, hasMillis) : ''
  }`;

  const [date, setDate] = React.useState(value ? value : new Date().getTime());

  const onChangeCallback = React.useCallback((ts: number) => {
    setDate(ts);
    onChangeCalendar && onChangeCalendar(ts);
  }, []);

  return (
    <Popover
      appendTo={appendTo}
      id={id ? `${id}__popover` : null}
      isOpened={isOpened}
      onClose={onClose}
    >
      {({ ref, toggle }) => (
        <div ref={ref}>
          <InputControl
            aria-label={ariaLabel}
            icon={<GICalendarMonthDayPlannerEvents />}
            id={id}
            value={value && format(value, datetimeFormat)}
            onChange={onChange}
            onClick={toggle}
            placeholder={placeholder}
            size={size}
          />
        </div>
      )}
      {({ setOpened }) => {
        const getActions = () => {
          const actionsArr = [];
          if (onCancel) {
            actionsArr.push(
              <Button
                key={'cancel'}
                onClick={() => {
                  setOpened(false);
                  onCancel();
                }}
              >
                {cancelButtonText}
              </Button>,
            );
          }
          if (onApply) {
            actionsArr.push(
              <Button
                key={'apply'}
                colorScheme={'accent'}
                onClick={() => {
                  setOpened(false);
                  onApply(date);
                }}
              >
                {applyButtonText}
              </Button>,
            );
          }
          return actionsArr;
        };
        return (
          <Popover.Panel
            as={as}
            styles={customStyles}
            width="auto"
            id={id ? `${id}__popover-panel` : null}
          >
            <Panel.Body>
              <DateTime
                {...restDateTimeProps}
                hasSeconds={hasSeconds}
                hasMillis={hasMillis}
                hasTime={hasTime}
                value={value}
                onChange={onChangeCallback}
              />
            </Panel.Body>
            {getActions().length > 0 && (
              <Panel.Footer bordered actions={getActions()} />
            )}
          </Popover.Panel>
        );
      }}
    </Popover>
  );
};
