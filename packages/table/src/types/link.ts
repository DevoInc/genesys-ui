import { EditText } from '../editors';
import { TextRenderer } from '../renderers';
import { linkFormatter } from '../valueFormatters/link';
import { ColumnType } from './declarations';

export const typeLink: ColumnType = {
  id: 'link',
  CellRenderer: TextRenderer,
  CellEditor: EditText,
  valueFormatter: linkFormatter,
};
