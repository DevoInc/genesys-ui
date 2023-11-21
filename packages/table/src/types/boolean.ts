import { EditBoolean } from '../editors';
import { TagRenderer } from '../renderers';
import { ColumnType } from './declarations';

export const typeBoolean: ColumnType = {
  id: 'tagBoolean',
  CellRenderer: TagRenderer,
  CellEditor: EditBoolean,
  cellRendererConfig: {
    true: { color: 'success', text: 'Active' },
    false: { color: 'neutral', text: 'Inactive' },
  },
};
