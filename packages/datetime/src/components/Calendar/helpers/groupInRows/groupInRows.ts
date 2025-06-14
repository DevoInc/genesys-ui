import type { ICellData } from '../../declarations';

export const groupInRows = (cells: ICellData[]) =>
  Array.from({ length: Math.floor(cells.length / 7) }).map((_, index) =>
    cells.slice(index * 7, index * 7 + 7),
  );
