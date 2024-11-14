import { TColDef } from "../../declarations";
import { OptionsEditor } from "../../editors";
import { OptionsFilter } from "../../filters";
import { OptionsRenderer } from "../../renderers";

export const options: TColDef = {
  id: 'options',
  cellRenderer: OptionsRenderer,
  cellEditor: OptionsEditor,
  cellFilter: OptionsFilter,
  minWidth: 100,
  context: {
    texts: {
      editorLabel: 'Edit this select content',
    },
  },
};
