import { ROW_HEIGHT_LG } from '../constants';
import { ColDef } from '../declarations';
import { TextAreaEditor } from '../editors';
import { TextRenderer } from '../renderers';

export const longText: ColDef = {
  id: 'longText',
  cellRenderer: TextRenderer,
  cellEditor: TextAreaEditor,
  rowHeight: ROW_HEIGHT_LG,
};
