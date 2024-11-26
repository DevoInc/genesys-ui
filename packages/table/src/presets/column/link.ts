import { TColDef } from "../../declarations";

import { TextEditor } from "../../editors";
import { TextExpand } from "../../expand";
import { TextFilter } from "../../filters";
import { LinkRenderer } from "../../renderers";

export const link: TColDef = {
  id: 'link',
  cellRenderer: LinkRenderer,
  cellEditor: TextEditor,
  cellFilter: TextFilter,
  cellExpand: TextExpand,
  context: {
    texts: {
      editorLabel: 'Edit this link content',
    },
  },
};
