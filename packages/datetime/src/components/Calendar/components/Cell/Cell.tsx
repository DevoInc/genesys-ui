import * as React from 'react';
import { AllHTMLAttributes } from 'react';

import { StyledCalendarCell } from './StyledCalendarCell';

export interface CellProps {
  /** classname to add */
  className?: AllHTMLAttributes<HTMLElement>['className'];
  /** Event fired when selected days change */
  onClick?: (ts: number) => void;
  /** Event fired when mouse enter a cell area */
  onMouseEnter?: React.DOMAttributes<HTMLDivElement>['onMouseEnter'];
  /** Event fired when mouse leave a cell area */
  onMouseLeave?: React.DOMAttributes<HTMLDivElement>['onMouseLeave'];
  /** Value to show into option */
  value?: number | string;
  /** Timestamp value */
  ts?: number;
  tooltip?: string;
  disabled?: boolean;
  label: string;
  isSelectedStart?: boolean;
  isSelectedEnd?: boolean;
  isInsideSelection?: boolean;
}

export const Cell = React.forwardRef<HTMLDivElement, CellProps>(
  (
    {
      className,
      onClick,
      onMouseEnter = () => {},
      onMouseLeave = () => {},
      value,
      ts,
      tooltip,
      disabled = false,
      label,
      isSelectedStart = false,
      isSelectedEnd = false,
      isInsideSelection = false,
    },
    ref,
  ) => {
    const onMouseEnterCallback =
      disabled || !value || !onMouseEnter ? undefined : onMouseEnter;
    const onMouseLeaveCallback =
      disabled || !value || !onMouseLeave ? undefined : onMouseEnter;
    return (
      <StyledCalendarCell
        ref={ref}
        onClick={
          !disabled && onClick && value
            ? () => {
                onClick(ts);
              }
            : null
        }
        onMouseEnter={onMouseEnterCallback}
        onMouseLeave={onMouseLeaveCallback}
        aria-label={label}
        aria-selected={isSelectedStart || isSelectedEnd ? true : null}
        aria-disabled={disabled}
        className={[
          'day',
          className,
          isSelectedStart ? 'selected range-start' : '',
          isSelectedEnd ? 'selected range-end' : '',
          isInsideSelection ? 'range-selected' : '',
        ].join(' ')}
        data-cell={value}
        data-ts={ts}
        role="gridcell"
        title={tooltip}
      >
        <span>{value}</span>
      </StyledCalendarCell>
    );
  },
);
