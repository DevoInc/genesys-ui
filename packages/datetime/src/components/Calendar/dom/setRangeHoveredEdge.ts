import { ICalendarDay } from '../declarations';

export const setRangeHoveredEdge = (
  cell: HTMLDivElement,
  index: number,
  cursorDay: ICalendarDay,
  side: 'left' | 'right',
) => {
  if (cursorDay.value === index) {
    cell.classList.add(
      side === 'right' ? 'range-hovered-right-edge' : 'range-hovered-left-edge',
    );
  } else {
    cell.classList.remove('range-hovered-right-edge');
    cell.classList.remove('range-hovered-left-edge');
  }
};
