import { TColDef } from '../../declarations';
import { NumberEditor } from '../../editors';
import { NumberFilter } from '../../filters';
import { TextRenderer } from '../../renderers';

export const number: TColDef = {
  id: 'number',
  cellRenderer: TextRenderer,
  cellEditor: NumberEditor,
  cellExpand: TextRenderer,
  align: 'right',
  cellFilter: NumberFilter,
  context: {
    texts: {
      editorLabel: 'Edit this number content',
    },
  },
};
