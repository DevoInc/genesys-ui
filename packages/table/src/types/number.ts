import { EditNumber } from '../editors';
import { TextRenderer } from '../renderers';
import { ColumnType } from './declarations';

export const typeNumber: ColumnType = {
  id: 'number',
  CellRenderer: TextRenderer,
  CellEditor: EditNumber,
};
