import { TagRenderer } from '../renderers';
import { ColumnType } from './declarations';

export const typeTag: ColumnType = {
  id: 'tag',
  CellRenderer: TagRenderer,
  cellRendererConfig: {
    TODO: { color: '#1EC990', text: 'TODO' },
    inProgress: { color: '#ED5353', text: 'inProgress' },
    test: { color: 'orange', text: 'test' },
    done: { color: 'green', text: 'done' },
  },
};
