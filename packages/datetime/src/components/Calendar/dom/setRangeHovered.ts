import type { ICalendarDay } from '../declarations';

export const setRangeHovered = (
  cell: HTMLDivElement,
  index: number,
  range: ICalendarDay[],
) => {
  if (index >= range[0].value && index <= range[1].value) {
    cell.classList.add('range-hovered');
  } else {
    cell.classList.remove('range-hovered');
  }
};
