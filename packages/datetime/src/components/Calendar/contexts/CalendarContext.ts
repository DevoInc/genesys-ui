import * as React from 'react';

interface Props {
  cellRefs: React.MutableRefObject<Map<number, HTMLDivElement>>;
}

export const CalendarContext = React.createContext<Props>({
  cellRefs: { current: new Map() },
});
