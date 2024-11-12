import { TCellDef } from '../../declarations';

import { existCellDef } from './existCellDef';

export const addNewCellDef = (cellDefs: TCellDef[], cellDef: TCellDef) =>
  !existCellDef(cellDefs, cellDef) ? [...cellDefs, cellDef] : cellDefs;
