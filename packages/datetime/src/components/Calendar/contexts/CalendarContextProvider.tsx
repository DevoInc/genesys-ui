import * as React from 'react';

import { CalendarContext } from './CalendarContext';
import type { ICalendarDay } from '../declarations';

interface Props {
  children: React.ReactNode;
}

export const CalendarContextProvider: React.FC<Props> = ({ children }) => {
  const cellRefs = React.useRef<[HTMLDivElement, ICalendarDay][]>([]);

  return (
    <CalendarContext.Provider value={{ cellRefs }}>
      {children}
    </CalendarContext.Provider>
  );
};
