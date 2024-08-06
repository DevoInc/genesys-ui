import type { TColDef } from '../declarations';
import { RowGroupingRenderer } from '../renderers';

export const rowGrouping: TColDef = {
  id: 'rowGrouping',
  cellRenderer: RowGroupingRenderer,
  minWidth: 50,
  headerOnFilterPosition: true,
};