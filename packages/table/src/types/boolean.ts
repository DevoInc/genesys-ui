import { Preset } from '../declarations';
import { EditBoolean } from '../editors';
import { TagRenderer } from '../renderers';

export const typeBoolean: Preset = {
  id: 'tagBoolean',
  cellRenderer: TagRenderer,
  cellEditor: EditBoolean,
  cellRendererConfig: {
    true: { color: 'success', text: 'True' },
    false: { color: 'neutral', text: 'False' },
  },
};
