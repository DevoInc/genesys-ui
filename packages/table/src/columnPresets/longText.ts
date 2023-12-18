import { ColDef } from '../declarations';
import { EditTextArea } from '../editors';
import { TextRenderer } from '../renderers';

export const longText: ColDef = {
  id: 'longText',
  cellRenderer: TextRenderer,
  cellEditor: EditTextArea,
};
