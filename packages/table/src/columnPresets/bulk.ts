import type { ColDef } from '../declarations';
import { HeaderBulkRenderer } from '../headerRenderers';
import { BulkRenderer } from '../renderers';

export const bulk: ColDef = {
  id: 'bulk',
  cellRenderer: BulkRenderer,
  headerRenderer: HeaderBulkRenderer,
  minWidth: 64,
  headerOnFilterPosition: true,
};
