import type { ColDef } from '../declarations';
import { ActionRenderer } from '../renderers';

export const actions: ColDef = {
  id: 'actions',
  cellRenderer: ActionRenderer,
  minWidth: 100,
  align: 'right',
};
