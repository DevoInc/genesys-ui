import * as React from 'react';
import { format } from 'date-fns';

import {
  Panel,
  Button,
  InputControl,
  InputControlProps,
  GlobalAriaProps,
  GlobalAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
  Popover,
  PopoverProps,
} from '@devoinc/genesys-ui';

import { DateTime, DateTimeProps } from '../DateTime';
import { getFormatTimeStr } from '../DateTime/utils/format';
import { toTimestamp } from '../utils';
import { GICalendarMonthDayPlannerEvents } from '@devoinc/genesys-icons';

export interface DateTimeFloatingPickerProps
  extends Pick<PopoverProps, 'appendTo' | 'isOpened'>,
    Omit<DateTimeProps, 'onChange' | 'selectedDates'>,
    Pick<InputControlProps, 'onChange' | 'placeholder' | 'size'>,
    Pick<GlobalAriaProps, 'aria-label'>,
    Pick<GlobalAttrProps, 'id'>,
    Pick<StyledOverloadCssProps, 'styles'>,
    Pick<StyledPolymorphicProps, 'as'> {
  /** Apply button text */
  applyButtonText?: string;
  /** Cancel button text */
  cancelButtonText?: string;
  /** Function called when Apply button is clicked. */
  onApply: (ts: number) => void;
  /** Function called when Cancel button is clicked. */
  onCancel: () => void;
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
  }, []);

  return (
    <Popover
      appendTo={appendTo}
      disableOutsideEvent
      id={id ? `${id}__popover` : null}
      isOpened={isOpened}
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
      {({ setOpened }) => (
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
          <Panel.Footer
            bordered
            actions={[
              <Button
                key={'cancel'}
                onClick={() => {
                  setOpened(false);
                  onCancel();
                }}
              >
                {cancelButtonText}
              </Button>,
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
            ]}
          />
        </Popover.Panel>
      )}
    </Popover>
  );
};
