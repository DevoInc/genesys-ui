import { TagRenderer } from '../renderers';
import { ColumnType } from './declarations';

export const typeTag: ColumnType = {
  id: 'tag',
  CellRenderer: TagRenderer,
  cellRendererConfig: {
    TODO: { color: 'warning', text: 'TODO' },
    inProgress: { color: 'info', text: 'In progress' },
    test: { color: 'data-purple', text: 'Test' },
    done: { color: 'success', text: 'Done' },
  },
};
