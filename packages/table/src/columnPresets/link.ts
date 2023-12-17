import { ColDef } from '../declarations';
import { EditText } from '../editors';
import { linkFormatter } from '../valueFormatters/link';

export const link: ColDef = {
  id: 'link',
  cellRenderer: ({ value }) => value,
  cellEditor: EditText,
  valueFormatter: linkFormatter,
};
