import type { TColDef } from '../../../declarations';

export const getColDefByIndex = (colDefs: TColDef[], index: number) =>
  colDefs ? colDefs[index] : undefined;
