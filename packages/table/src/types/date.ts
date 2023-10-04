import { EditDate } from '../editors/EditDate';
import { TextRenderer } from '../renderers';
import { dateFormatter } from '../valueFormatters/date';
import { ColumnType } from './declarations';

export const typeDate: ColumnType = {
  id: 'date',
  CellRenderer: TextRenderer,
  valueFormatter: dateFormatter,
  CellEditor: EditDate,
  context: {
    formatDate: 'dd/MM/yyyy HH:mm:ss',
    tz: 'Europe/Madrid',
    locale: 'es',
  },
};
