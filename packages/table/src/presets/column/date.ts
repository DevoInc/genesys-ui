import { enUS } from 'date-fns/locale';

import { TColDef } from '../../declarations';
import { TextRenderer } from '../../renderers';
import { dateFormatter } from '../../valueFormatters';
import { DateEditor } from '../../editors/DateEditor';
// import { DateFilter } from '../../filters';

export const date: TColDef = {
  id: 'date',
  cellRenderer: TextRenderer,
  valueFormatter: dateFormatter,
  cellEditor: DateEditor,
  truncateLine: 1,
  context: {
    formatDate: 'yyyy-MM-dd HH:mm:ss',
    tz: 'Europe/Madrid',
    locale: enUS,
  },
  // cellFilter: DateFilter,
};
