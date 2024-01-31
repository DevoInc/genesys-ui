import { ColDef } from '../declarations';
// import { OptionsFilter } from '../filters';
import { OptionsRenderer } from '../renderers';

export const options: ColDef = {
  id: 'options',
  cellRenderer: OptionsRenderer,
  // cellFilter: OptionsFilter,
  minWidth: 100,
};
