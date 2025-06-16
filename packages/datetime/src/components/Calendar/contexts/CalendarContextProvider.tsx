import * as React from 'react';

import { CalendarContext } from './CalendarContext';

interface Props {
  children: React.ReactNode;
}

export const CalendarContextProvider: React.FC<Props> = ({ children }) => {
  const cellRefs = React.useRef<Map<number, HTMLDivElement>>(new Map());

  return (
    <CalendarContext.Provider value={{ cellRefs }}>
      {children}
    </CalendarContext.Provider>
  );
};
