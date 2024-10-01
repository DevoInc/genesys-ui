import type { TColDef } from '../../../declarations';

export const getColDef = (colDefs: TColDef[], id: string) =>
  colDefs?.find((col) => col.id === id);
