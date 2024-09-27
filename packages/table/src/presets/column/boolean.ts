import { TColDef } from "../../declarations";

import { BooleanEditor } from "../../editors";
import { BooleanFilter } from "../../filters";
import { BooleanRenderer } from "../../renderers";

export const boolean: TColDef = {
  id: 'boolean',
  cellRenderer: BooleanRenderer,
  cellEditor: BooleanEditor,
  cellFilter: BooleanFilter,
  minWidth: 100,
};
