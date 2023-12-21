import { ColDef } from '../declarations';
import { TextEditor } from '../editors';
import { TextFilter } from '../filters';
import { TextRenderer } from '../renderers';

export const text: ColDef = {
  id: 'text',
  cellRenderer: TextRenderer,
  cellEditor: TextEditor,
  cellFilter: TextFilter,
};
