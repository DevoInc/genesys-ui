import { TColDef } from '../declarations';
import { OptionsFilter } from '../filters';
import { OptionsRenderer } from '../renderers';

export const options: TColDef = {
  id: 'options',
  cellRenderer: OptionsRenderer,
  cellFilter: OptionsFilter,
  minWidth: 100,
};
