export const clearHover = (cell: HTMLDivElement) => {
  cell.classList.remove('range-hovered');
  cell.classList.remove('range-hovered-right-edge');
  cell.classList.remove('range-hovered-left-edge');
};
