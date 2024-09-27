import { ROW_HEIGHT_LG } from '../../../constants';

import { TColDef } from '../../../declarations';
import { TextAreaEditor } from '../../../editors';
import { TextFilter } from '../../../filters';
import { TextRenderer } from '../../../renderers';

export const longText: TColDef = {
  id: 'longText',
  cellRenderer: TextRenderer,
  cellEditor: TextAreaEditor,
  rowHeight: ROW_HEIGHT_LG,
  cellFilter: TextFilter,
};
