import { enUS } from 'date-fns/locale';

import { TColDef } from '../../declarations';
import { TextRenderer } from '../../renderers';
import { dateFormatter } from '../../valueFormatters';
import { DateEditor } from '../../editors';

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
