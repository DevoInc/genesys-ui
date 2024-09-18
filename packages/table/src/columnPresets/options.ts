import type { TColDef } from '../declarations';

import { OptionsFilter } from '../filters';
import { OptionsRenderer } from '../renderers';
import { OptionsEditor } from '../editors';

export const options: TColDef = {
  id: 'options',
  cellRenderer: OptionsRenderer,
  cellEditor: OptionsEditor,
  cellFilter: OptionsFilter,
  minWidth: 100,
};
