import { EditText } from '../editors';
import { TextRenderer } from '../renderers';
import { ColumnType } from './declarations';

export const typeString: ColumnType = {
  id: 'text',
  CellRenderer: TextRenderer,
  CellEditor: EditText,
};
