import type { TRowDef } from '../../declarations';

export const deleteAfterRowToRowDefs = (rowDefs: TRowDef[], id: string) =>
  rowDefs.filter((row) => row.id !== `afterRow-${id}`);
