import { ColDef } from '../declarations';
import { TextEditor } from '../editors';
import { TextFilter } from '../filters';
import { LinkRenderer } from '../renderers';

export const link: ColDef = {
  id: 'link',
  cellRenderer: LinkRenderer,
  cellEditor: TextEditor,
  cellFilter: TextFilter,
};
