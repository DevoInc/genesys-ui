import * as React from 'react';
import { formatDate, isValidFormat } from '../DateTime/utils/format';

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
import { GICalendarMonthDayPlannerEvents } from '@devoinc/genesys-icons';
import { parseToTimestamp, toTimestamp } from '../utils';

export interface DateTimeFloatingPickerProps
  extends Pick<PopoverProps, 'appendTo' | 'isOpened' | 'onClose'>,
    Omit<DateTimeProps, 'onChange' | 'selectedDates'>,
    Pick<InputControlProps, 'placeholder' | 'size'>,
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
  /** Funcion called when input text is changed. */
  onInputChange: InputControlProps['onChange'];
  onInputBlur: InputControlProps['onBlur'];
  onInputKeyUp: InputControlProps['onKeyUp'];
  /** Valid date format. Check https://date-fns.org/docs/format */
  validDateFormats: string[];
}

export const DateTimeFloatingPicker: React.FC<DateTimeFloatingPickerProps> = ({
  'aria-label': ariaLabel = 'datetime',
  appendTo,
  applyButtonText = 'Apply',
  as,
  cancelButtonText = 'Cancel',
  validDateFormats: formatStr,
  hasMillis = false,
  hasSeconds = true,
  hasTime = true,
  id,
  isOpened,
  onApply,
  onCancel,
  onChangeCalendar,
  onInputBlur: onBlurInput,
  onInputChange: onChangeInput,
  onInputKeyUp: onKeyUpInput,
  onClose,
  placeholder,
  size,
  styles: customStyles,
  value: customValue,
  ...restDateTimeProps
}) => {
  const value = toTimestamp(customValue);

  const [date, setDate] = React.useState(value ? value : new Date().getTime());
  const [formatedDate, setFormatDate] = React.useState(
    formatDate({
      format: formatStr?.[0],
      hasMillis,
      hasSeconds,
      hasTime,
      ts: value,
    }),
  );

  const onBlurInputCallback = React.useCallback(
    (event) => {
      const inputValue = (event?.target?.value as string) || ('' as string);
      // TODO: debo yo revisar esto?
      if (isValidFormat(inputValue, formatStr)) {
        onApply?.(parseToTimestamp(inputValue));
      }
      onBlurInput?.(event.target.value);
    },
    [onBlurInput],
  );

  const onChangeInputCallback = React.useCallback(
    (event) => {
      setFormatDate(event.target.value);
      onChangeInput?.(event.target.value);
    },
    [onChangeInput],
  );

  const onChangeCallback = React.useCallback(
    (ts: number) => {
      console.log('onChangeCalendar');
      setDate(ts);
      onChangeCalendar && onChangeCalendar(ts);
    },
    [onChangeCalendar],
  );

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
            aria-label={ariaLabel as string}
            icon={<GICalendarMonthDayPlannerEvents />}
            id={id as string}
            onBlur={onBlurInputCallback}
            onChange={onChangeInputCallback}
            onClick={toggle}
            onKeyUp={onKeyUpInput}
            placeholder={placeholder}
            size={size}
            value={formatedDate}
          />
        </div>
      )}
      {({ setOpened }) => {
        const getActions = () => [
          ...(onCancel
            ? [
                <Button
                  key={'cancel'}
                  onClick={() => {
                    setOpened(false);
                    onCancel();
                  }}
                >
                  {cancelButtonText}
                </Button>,
              ]
            : []),
          ...(onApply
            ? [
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
              ]
            : []),
        ];

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
