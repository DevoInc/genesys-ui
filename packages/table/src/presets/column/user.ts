import { TColDef } from '../../declarations';
import { UserRenderer } from '../../renderers';
import { UserFilter } from '../../filters';

export const user: TColDef = {
  id: 'user',
  cellRenderer: UserRenderer,
  cellFilter: UserFilter,
  minWidth: 100,
};
