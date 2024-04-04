import * as React from 'react';
import { format } from 'date-fns';
import { AllHTMLAttributes } from 'react';

import { IStyledOverloadCss } from '@devoinc/genesys-ui';

import { StyledCalendarCell } from './StyledCalendarCell';

export interface CellProps extends IStyledOverloadCss {
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
}

const InternalCell: React.FC<CellProps> = ({
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  value,
  styles,
  ts,
}) => {
  const disabled = className && className.includes('disabled');
  const formattedDate = ts ? format(new Date(ts), 'PPPP') : null;
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
      aria-label={formattedDate}
      aria-selected={className && className.includes('selected') ? true : null}
      className={`day ${className}`}
      css={styles}
      data-cell={value}
      data-ts={ts}
      title={formattedDate}
    >
      {value && <span>{value}</span>}
    </StyledCalendarCell>
  );
};

export const Cell = React.memo(InternalCell);

InternalCell.displayName = 'Cell';
