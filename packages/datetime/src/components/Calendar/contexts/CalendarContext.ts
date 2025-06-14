import * as React from 'react';

import type { ICalendarDay } from '../declarations';

interface Props {
  cellRefs: React.MutableRefObject<[HTMLDivElement, ICalendarDay][]>;
}

export const CalendarContext = React.createContext<Props>({
  cellRefs: { current: [] },
});
