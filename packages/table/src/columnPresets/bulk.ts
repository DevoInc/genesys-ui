import type { TColDef } from '../declarations';

import { HeaderBulkRenderer } from '../headerRenderers';
import { BulkRenderer } from '../renderers';

export const bulk: TColDef = {
  id: 'bulk',
  cellRenderer: BulkRenderer,
  headerRenderer: HeaderBulkRenderer,
  minWidth: 64,
  headerOnFilterPosition: true,
};
