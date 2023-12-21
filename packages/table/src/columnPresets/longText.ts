import { ColDef } from '../declarations';
import { TextAreaEditor } from '../editors';
import { TextRenderer } from '../renderers';

export const longText: ColDef = {
  id: 'longText',
  cellRenderer: TextRenderer,
  cellEditor: TextAreaEditor,
};
