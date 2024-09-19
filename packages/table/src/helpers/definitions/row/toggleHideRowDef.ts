import type { TRowDef } from '../../../declarations';

export const toggleHideRowDef = (rowDefs: TRowDef[], id: string) =>
  rowDefs?.map((rowDef: TRowDef) =>
    rowDef.id === id ? { ...rowDef, hide: !rowDef.hide } : rowDef,
  );
