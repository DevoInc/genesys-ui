import * as React from 'react';
import { usePopper } from 'react-popper';
import ReactDOM from 'react-dom';
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
} from '@devoinc/genesys-ui';

import { DateTime, DateTimeProps } from '../DateTime';
import { getFormatTimeStr } from '../DateTime/utils/format';
import { toTimestamp } from '../utils';

const defaultAppendToProp =
  typeof window !== 'undefined' ? document.body : null;

export interface DateTimeFloatingPickerProps
  extends Omit<DateTimeProps, 'onChange' | 'selectedDates'>,
    Pick<InputControlProps, 'onChange' | 'placeholder' | 'size'>,
    Pick<GlobalAriaProps, 'aria-label'>,
    Pick<GlobalAttrProps, 'id'>,
    StyledOverloadCssProps,
    StyledPolymorphicProps {
  /** DOM element where the popper is appended. It is appended to the body
   * by default. */
  appendTo?: HTMLElement;
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
  appendTo = defaultAppendToProp,
  applyButtonText = 'Apply',
  as,
  cancelButtonText = 'Cancel',
  hasMillis = false,
  hasSeconds = true,
  hasTime = true,
  id,
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

  const [referenceElement, setReferenceElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [],
  });
  const [date, setDate] = React.useState(value ? value : new Date().getTime());
  const [visible, setVisible] = React.useState(false);

  const onCancelCallback = React.useCallback(() => {
    setVisible(false);
    onCancel();
  }, [onCancel]);

  const onClickInputCallback = React.useCallback(() => {
    setVisible(true);
  }, []);

  const onApplyCallback = React.useCallback(() => {
    setVisible(false);
    onApply(date);
  }, [onApply, date]);

  const onChangeCallback = React.useCallback((ts: number) => {
    setDate(ts);
  }, []);

  const PopperCmp = (
    <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
      <Panel
        ref={null}
        as={as}
        elevation="activated"
        footerSettings={{
          actions: [
            <Button key={'cancel'} onClick={onCancelCallback}>
              {cancelButtonText}
            </Button>,
            <Button
              key={'apply'}
              colorScheme={'accent'}
              onClick={onApplyCallback}
            >
              {applyButtonText}
            </Button>,
          ],
          bordered: true,
        }}
        styles={customStyles}
      >
        <DateTime
          {...restDateTimeProps}
          hasSeconds={hasSeconds}
          hasMillis={hasMillis}
          hasTime={hasTime}
          value={value}
          onChange={onChangeCallback}
        />
      </Panel>
    </div>
  );

  return (
    <>
      <div ref={setReferenceElement}>
        <InputControl
          aria-label={ariaLabel}
          icon="gi-calendar_month_day_planner_events"
          id={id}
          value={value && format(value, datetimeFormat)}
          onChange={onChange}
          onClick={onClickInputCallback}
          placeholder={placeholder}
          size={size}
        />
      </div>
      {visible &&
        (appendTo ? ReactDOM.createPortal(PopperCmp, appendTo) : PopperCmp)}
    </>
  );
};
