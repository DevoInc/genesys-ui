import { EditText } from '../editors';
import { linkFormatter } from '../valueFormatters/link';
import { ColumnType } from './declarations';

export const typeLink: ColumnType = {
  id: 'link',
  CellRenderer: ({ value }) => value,
  CellEditor: EditText,
  valueFormatter: linkFormatter,
};
