import { EditBoolean } from '../editors';
import { TagRenderer } from '../renderers';
import { ColumnType } from './declarations';

export const typeBoolean: ColumnType = {
  id: 'tagBoolean',
  CellRenderer: TagRenderer,
  CellEditor: EditBoolean,
  cellRendererConfig: {
    true: { color: '#1EC990', text: 'Active' },
    false: { color: '#ED5353', text: 'Inactive' },
  },
};
