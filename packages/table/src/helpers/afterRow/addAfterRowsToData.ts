import type { TData } from '../../declarations';

export const addAfterRowsToData = (data: TData) => {
  const afterRowIds = [];
  const newData = data.reduce((prev, row) => {
    const id = `afterRow-${row.id}`;
    afterRowIds.push(id);
    return prev.concat([row].concat([{ ...row, id }]));
  }, [] as TData);
  return [newData, afterRowIds] as [TData, string[]];
};

export const addAfterRowToData = (data: TData, id: string | number) =>
  data.reduce(
    (prev, row) =>
      row.id === id
        ? prev.concat([row].concat([{ ...row, id: `afterRow-${id}` }]))
        : prev.concat([row]),
    [] as TData,
  );

export const deleteAfterRowToDataById = (data: TData, id: string) =>
  data.filter((d) => d.id !== id);

export const findDataById = (data: TData, id: string) =>
  data.find((d) => d.id === id);
