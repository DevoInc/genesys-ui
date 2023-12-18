import { ColDef } from '../declarations';
import { EditText } from '../editors';
import { TextFilter } from '../filters';
import { TextRenderer } from '../renderers';

export const text: ColDef = {
  id: 'text',
  cellRenderer: TextRenderer,
  cellEditor: EditText,
  cellFilter: TextFilter,
};
