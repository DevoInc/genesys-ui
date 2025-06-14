import type { ICalendarDay } from '../declarations';

export const setRangeHovered = (
  [cell, day]: [HTMLDivElement, ICalendarDay],
  range: ICalendarDay[],
) => {
  if (day.value >= range[0].value && day.value <= range[1].value) {
    cell.classList.add('range-hovered');
  } else {
    cell.classList.remove('range-hovered');
  }
};
