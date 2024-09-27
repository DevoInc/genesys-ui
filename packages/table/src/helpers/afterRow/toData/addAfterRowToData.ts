import type { TData } from '../../../declarations';

export const addAfterRowToData = (data: TData, id: string) =>
  data.reduce(
    (prev, row) =>
      row.id === id
        ? prev.concat([row].concat([{ ...row, id: `afterRow-${id}` }]))
        : prev.concat([row]),
    [] as TData,
  );
