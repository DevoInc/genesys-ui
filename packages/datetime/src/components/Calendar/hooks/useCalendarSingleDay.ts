import * as React from 'react';

export const useCalendarSingleDay = (range: (Date | number)[] = []) => {
  const [selectedDates, setSelectedDates] = React.useState(range);

  const handleDateChange = (dt: Date | number) => {
    setSelectedDates([dt]);
  };

  return {
    selectedDates,
    hasLeftHoverEffect: false,
    hasRightHoverEffect: false,
    handleDateChange,
  };
};
