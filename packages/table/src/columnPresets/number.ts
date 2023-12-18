import { ColDef } from '../declarations';
import { EditNumber } from '../editors';
import { NumberFilter } from '../filters';
import { TextRenderer } from '../renderers';

export const number: ColDef = {
  id: 'number',
  cellRenderer: TextRenderer,
  cellEditor: EditNumber,
  cellStyle: {
    align: {
      horizontal: 'right',
    },
  },
  cellFilter: NumberFilter,
};
