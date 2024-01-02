import { ColDef } from '../declarations';
import { DateEditor } from '../editors';
import { TextRenderer } from '../renderers';
import { dateFormatter } from '../valueFormatters/date';

export const date: ColDef = {
  id: 'date',
  cellRenderer: TextRenderer,
  valueFormatter: dateFormatter,
  cellEditor: DateEditor,
  context: {
    formatDate: 'dd/MM/yyyy HH:mm:ss',
    tz: 'Europe/Madrid',
    locale: 'es',
  },
};

// TODO: Review the merge of global context with column context
