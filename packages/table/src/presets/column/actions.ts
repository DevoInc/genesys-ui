import type { TColDef } from "../../declarations";
import { ActionRenderer } from "../../renderers";

export const actions: TColDef = {
  id: 'actions',
  cellRenderer: ActionRenderer,
  minWidth: 100,
  align: 'right',
};
