import type { TRowDef } from '../../../declarations';

export const getRowDef = (rowDefs: TRowDef[], id: string) =>
  rowDefs?.find((row) => row.id === id);
