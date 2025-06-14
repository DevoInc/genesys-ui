import { ICalendarDay } from '../declarations';

export const setRangeHoveredEdge = (
  [cell, day]: [HTMLDivElement, ICalendarDay],
  cursorDay: ICalendarDay,
  side: 'left' | 'right',
) => {
  if (cursorDay.value === day.value) {
    cell.classList.add(
      side === 'right' ? 'range-hovered-right-edge' : 'range-hovered-left-edge',
    );
  } else {
    cell.classList.remove('range-hovered-right-edge');
    cell.classList.remove('range-hovered-left-edge');
  }
};
