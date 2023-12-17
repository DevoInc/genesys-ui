import { ColDef } from '../declarations';
import { TagRenderer } from '../renderers';

export const tag: ColDef = {
  id: 'tag',
  cellRenderer: TagRenderer,
  cellRendererConfig: {
    TODO: { color: 'warning', text: 'TODO' },
    inProgress: { color: 'info', text: 'In progress' },
    test: { color: 'data-purple', text: 'Test' },
    done: { color: 'success', text: 'Done' },
  },
};
