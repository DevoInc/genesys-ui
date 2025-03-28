import * as React from 'react';

import { StyledCalendarWeekDay } from './StyledCalendarWeekDay';

export interface CalendarWeekDayProps {
  /** Value to show into option */
  value: string;
}

export const CalendarWeekDay: React.FC<CalendarWeekDayProps> = ({ value }) => (
  <StyledCalendarWeekDay aria-label={value} role="columnheader">
    <span>{value}</span>
  </StyledCalendarWeekDay>
);
