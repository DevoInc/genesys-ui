import { TColDef } from "../../declarations";
import { OptionsEditor } from "../../editors";
import { OptionsExpand } from "../../expand";
import { OptionsFilter } from "../../filters";
import { OptionsRenderer } from "../../renderers";

export const options: TColDef = {
  id: 'options',
  cellRenderer: OptionsRenderer,
  cellEditor: OptionsEditor,
  cellFilter: OptionsFilter,
  cellExpand: OptionsExpand,
  minWidth: 100,
  context: {
    texts: {
      editorLabel: 'Edit this select content',
    },
  },
};
