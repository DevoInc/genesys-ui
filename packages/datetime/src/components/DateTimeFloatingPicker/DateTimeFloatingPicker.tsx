import * as React from 'react';

import {
  Panel,
  Button,
  type IGlobalAriaAttrs,
  type IGlobalAttrs,
  type IStyledOverloadCss,
  type IStyledPolymorphic,
  Popover,
  type PopoverProps,
} from '@devoinc/genesys-ui';

import { DateTime, type DateTimeProps } from '../DateTime';
import { toTimestamp } from '../../utils/time';
import { DateTimeInput, DateTimeInputProps } from '../DateTimeInput';
import { formatDate, parseDate as parseDateFN } from '../../utils';
import { TDatetime } from '../declarations';

export interface DateTimeFloatingPickerProps
  extends Pick<PopoverProps, 'appendTo' | 'isOpened' | 'onClose' | 'placement'>,
    Omit<DateTimeProps, 'onChange' | 'selectedDates'>,
    Omit<
      DateTimeInputProps,
      'onChange' | 'hasMillis' | 'hasSeconds' | 'hasTIme' | 'value'
    >,
    Pick<IGlobalAriaAttrs, 'aria-label'>,
    Pick<IGlobalAttrs, 'id'>,
    Pick<IStyledOverloadCss, 'styles'>,
    Pick<IStyledPolymorphic, 'as'> {
  /** Apply button text */
  applyButtonText?: string;
  /** Cancel button text */
  cancelButtonText?: string;
  /** Function called when Apply button is clicked. */
  onApply?: (ts: number) => void;
  /** Function called when Cancel button is clicked. */
  onCancel?: () => void;
  /** Function called when any enabled calendar cell is clicked or the time input changed. */
  onChange?: DateTimeProps['onChange'];
}

export const DateTimeFloatingPicker: React.FC<DateTimeFloatingPickerProps> = ({
  'aria-label': ariaLabel = 'datetime',
  appendTo,
  applyButtonText = 'Apply',
  as,
  cancelButtonText = 'Cancel',
  dateFormats,
  hasMillis = false,
  hasSeconds = true,
  hasTime = true,
  id,
  isOpened,
  onApply,
  onCancel,
  onChange,
  onClose,
  parseDate = parseDateFN,
  styles: customStyles,
  value: customValue = new Date().getTime(),
  ...restDateTimeProps
}) => {
  const value = toTimestamp(customValue);

  const [inputDate, setInputDate] = React.useState<number>(value);

  const setOpenendRef =
    React.useRef<React.Dispatch<React.SetStateAction<boolean>>>();

  const onInputChangeCallback = React.useCallback(
    (ts: number) => {
      onChange?.(ts);
      onApply?.(ts);
    },
    [onApply, onChange],
  );

  const onDateTimeChangeCallback = React.useCallback(
    (ts: number) => {
      setInputDate(ts);
      onChange?.(ts);
    },
    [onChange],
  );

  const onInputKeyUpCallback = React.useCallback(
    (event: React.KeyboardEvent<Element>) => {
      if (
        event.type === 'keyup' &&
        (event.code === 'Escape' || event.code === 'Enter')
      ) {
        setOpenendRef.current(false);
      }
    },
    [],
  );

  const validateDateCallback = React.useCallback(
    (ts: TDatetime) => {
      const strDate = formatDate({
        format: dateFormats?.[0],
        hasMillis,
        hasSeconds,
        hasTime,
        ts,
      });

      return parseDate(strDate).isValid;
    },
    [dateFormats, hasMillis, hasSeconds, hasTime, parseDate],
  );

  return (
    <Popover
      appendTo={appendTo}
      id={id ? `${id}__popover` : null}
      isOpened={isOpened}
      onClose={onClose}
    >
      {({ ref, setOpened }) => (
        <div ref={ref}>
          <DateTimeInput
            {...restDateTimeProps}
            aria-label={ariaLabel}
            id={id}
            onKeyUp={onInputKeyUpCallback}
            onChange={onInputChangeCallback}
            onClick={() => setOpened(true)}
            value={inputDate}
          />
        </div>
      )}
      {({ setOpened }) => {
        setOpenendRef.current = setOpened;
        const getActions = () => [
          ...(onCancel
            ? [
                <Button
                  key={'cancel'}
                  onClick={() => {
                    setOpened(false);
                    onCancel?.();
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
                    onApply?.(inputDate);
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
                hasMillis={hasMillis}
                hasSeconds={hasSeconds}
                hasTime={hasTime}
                onChange={onDateTimeChangeCallback}
                validateDate={validateDateCallback}
                value={value}
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
