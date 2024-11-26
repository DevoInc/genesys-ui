import { TColDef } from "../../declarations";
import { TextEditor } from "../../editors";
import { TextExpand } from "../../expand";
import { TextFilter } from "../../filters";
import { TextRenderer } from "../../renderers";

export const text: TColDef = {
  id: 'text',
  cellRenderer: TextRenderer,
  cellEditor: TextEditor,
  cellExpand: TextExpand,
  context: {
    texts: {
      editorLabel: 'Edit this text content',
    },
  },
  cellFilter: TextFilter,
};
