import * as React from 'react';
import { format } from 'date-fns';

import { StyledOverloadCssProps } from '@devoinc/genesys-ui';

import { StyledCalendarCell } from './StyledCalendarCell';
import { AllHTMLAttributes } from 'react';

export interface CellProps extends StyledOverloadCssProps {
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
  const dateFormated = ts ? format(new Date(ts), 'PPPP') : null;
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
      aria-label={dateFormated}
      aria-selected={className && className.includes('selected') ? true : null}
      className={`day ${className}`}
      css={styles}
      data-cell={value}
      data-ts={ts}
      title={dateFormated}
    >
      {value && <span>{value}</span>}
    </StyledCalendarCell>
  );
};

export const Cell = React.memo(InternalCell);
Cell.displayName = 'Cell';
