/**
 * Given the before days + month days should return the after days to complete
 * the calendar days */
export const getCalendarAfterDays = (x: number) => Math.ceil(x / 7) * 7 - x;
