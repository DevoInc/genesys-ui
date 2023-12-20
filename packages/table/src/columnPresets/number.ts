import { ColDef } from '../declarations';
import { NumberEditor } from '../editors';
import { NumberFilter } from '../filters';
import { TextRenderer } from '../renderers';

export const number: ColDef = {
  id: 'number',
  cellRenderer: TextRenderer,
  cellEditor: NumberEditor,
  cellStyle: {
    align: {
      horizontal: 'right',
    },
  },
  cellFilter: NumberFilter,
};
