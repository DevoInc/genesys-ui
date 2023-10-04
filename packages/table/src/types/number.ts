import { EditNumber } from '../editors';
import { NumberRenderer } from '../renderers';
import { ColumnType } from './declarations';

export const typeNumber: ColumnType = {
  id: 'number',
  CellRenderer: NumberRenderer,
  CellEditor: EditNumber,
};
