import * as React from 'react';

export const useCalendarSingle = (initialRange: (number | Date)[] = []) => {
  const [range, setRange] = React.useState(initialRange);

  const handleNewDate = (dt: Date | number) => {
    setRange([dt]);
  };

  return {
    range,
    handleNewDate,
  };
};
