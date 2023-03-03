/**
 * Determines if a Unix timestamp falls within a specified date range and meets a validation criteria.
 *
 * The function checkValidDate takes in a Unix timestamp (ts), a validation callback function (validationFn),
 * and optional minimum and maximum dates (minDate and maxDate), and returns a boolean value indicating
 * whether the given timestamp satisfies the specified date range and validation criteria.
 */

export const checkValidDate = ({
  ts,
  validationFn,
  minDate,
  maxDate,
}: {
  ts: number;
  validationFn: (ts: number) => boolean;
  minDate: number;
  maxDate: number;
}): boolean => {
  const isTSLessMaxDate = ts <= new Date(maxDate).getTime();
  const isTSBigMinDate = ts >= new Date(minDate).getTime();
  if (validationFn) {
    if (maxDate) {
      if (minDate) {
        return isTSLessMaxDate && isTSBigMinDate ? validationFn(ts) : false;
      }
      return isTSLessMaxDate ? validationFn(ts) : false;
    }
    if (minDate) {
      return isTSBigMinDate ? validationFn(ts) : false;
    }
    return validationFn(ts);
  }
  if (maxDate) {
    return minDate ? isTSLessMaxDate && isTSBigMinDate : isTSLessMaxDate;
  }
  if (minDate) {
    return isTSBigMinDate;
  }
  return true;
};

/**
 * Determines whether two Unix timestamps correspond to the same calendar day.
 */
export const isSameDay = (day1: number, day2: number): boolean => {
  const d1 = new Date(day1);
  const d2 = new Date(day2);

  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
};
