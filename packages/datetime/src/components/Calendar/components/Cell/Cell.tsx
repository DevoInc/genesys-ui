import * as React from 'react';
import { AllHTMLAttributes } from 'react';

import { StyledCalendarCell } from './StyledCalendarCell';

export interface CellProps {
  /** classname to add */
  className?: AllHTMLAttributes<HTMLElement>['className'];
  /** Event fired when selected days change */
  onClick?: (ts: number) => void;
  /** Event fired when mouse enter a cell area */
  onMouseEnter?: (ts: number) => void;
  /** Event fired when mouse leave a cell area */
  onMouseLeave?: () => void;
  /** Value to show into option */
  value?: number | string;
  /** Timestamp value */
  ts?: number;
  tooltip?: string;
  disabled?: boolean;
  label: string;
  selected?: boolean;
}

export const Cell: React.FC<CellProps> = ({
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  value,
  ts,
  tooltip,
  disabled = false,
  label,
  selected = false,
}) => (
  <StyledCalendarCell
    onClick={
      !disabled && onClick && value
        ? () => {
            onClick(ts);
          }
        : null
    }
    onMouseEnter={
      !disabled && onMouseEnter && value
        ? () => {
            onMouseEnter(ts);
          }
        : null
    }
    onMouseLeave={
      !disabled && onMouseLeave && value
        ? () => {
            onMouseLeave();
          }
        : null
    }
    aria-label={label}
    aria-selected={selected ? true : null}
    aria-disabled={disabled}
    className={`day ${className}`}
    data-cell={value}
    data-ts={ts}
    role="gridcell"
    title={tooltip}
  >
    <span>{value}</span>
  </StyledCalendarCell>
);
