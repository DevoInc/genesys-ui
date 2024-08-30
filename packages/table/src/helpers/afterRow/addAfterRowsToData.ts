import type { TData } from '../../declarations';

export const addAfterRowsToData = (data: TData) => {
  const afterRowIds = [];
  const newData = data.reduce((prev, row) => {
    const id = `afterRow-${row.id}`;
    afterRowIds.push(id);
    return prev.concat([row].concat([{ ...row, id }]));
  }, [] as TData);
  return [newData, afterRowIds];
};
