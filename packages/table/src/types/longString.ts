import { EditTextArea } from '../editors';
import { TextRenderer } from '../renderers';
import { ColumnType } from './declarations';

export const typeLongString: ColumnType = {
  id: 'longText',
  CellRenderer: TextRenderer,
  CellEditor: EditTextArea,
};
