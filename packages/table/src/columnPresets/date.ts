import { TColDef } from '../declarations';
import { DateEditor } from '../editors';
import { TextRenderer } from '../renderers';
import { dateFormatter } from '../valueFormatters/date';
import { enUS } from 'date-fns/locale';

export const date: TColDef = {
  id: 'date',
  cellRenderer: TextRenderer,
  valueFormatter: dateFormatter,
  cellEditor: DateEditor,
  context: {
    formatDate: 'dd/MM/yyyy HH:mm:ss',
    tz: 'Europe/Madrid',
    locale: enUS,
  },
};
