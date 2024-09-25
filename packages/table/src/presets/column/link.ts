import { TColDef } from "../../declarations";

import { TextEditor } from "../../editors";
import { TextFilter } from "../../filters";
import { LinkRenderer } from "../../renderers";

export const link: TColDef = {
  id: 'link',
  cellRenderer: LinkRenderer,
  cellEditor: TextEditor,
  cellFilter: TextFilter,
};
