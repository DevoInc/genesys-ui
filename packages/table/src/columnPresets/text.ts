import type { TColDef } from '../declarations';

import { TextEditor } from '../editors';
import { TextFilter } from '../filters';
import { TextRenderer } from '../renderers';

export const text: TColDef = {
  id: 'text',
  cellRenderer: TextRenderer,
  cellEditor: TextEditor,
  context: {
    texts: {
      editorLabel: 'Edit this text content',
    },
  },
  cellFilter: TextFilter,
};
