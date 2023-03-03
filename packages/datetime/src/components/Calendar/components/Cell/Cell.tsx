import * as React from 'react';

import { StyledCalendarCell } from './StyledCalendarCell';

export interface CellProps {
  /** classname to add */
  className?: string;
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
}

const InternalCell: React.FC<CellProps> = ({
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  value,
  ts,
}) => {
  const disabled = className && className.includes('disabled');
  return (
    <StyledCalendarCell
      onClick={() => {
        if (!disabled && onClick && value) {
          onClick(ts);
        }
      }}
      onMouseEnter={() => {
        if (!disabled && onMouseEnter && value) {
          onMouseEnter(ts);
        }
      }}
      onMouseLeave={() => {
        if (!disabled && onMouseLeave && value) {
          onMouseLeave();
        }
      }}
      className={`day ${className}`}
      data-cell={value}
      data-ts={ts}
    >
      {value && <span>{value}</span>}
    </StyledCalendarCell>
  );
};

export const Cell = React.memo(InternalCell);
Cell.displayName = 'Cell';
