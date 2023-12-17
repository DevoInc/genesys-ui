import { ColDef } from '../declarations';
import { EditBoolean } from '../editors';
import { TagRenderer } from '../renderers';

export const tagBoolean: ColDef = {
  id: 'tagBoolean',
  cellRenderer: TagRenderer,
  cellEditor: EditBoolean,
  cellRendererConfig: {
    true: { color: 'success', text: 'Active' },
    false: { color: 'neutral', text: 'Inactive' },
  },
};
