import * as React from 'react';
import { TCellRenderer, TRowDef } from '../../declarations';

export const addAfterRowsToRowDefs = (
  ids: string[],
  afterRowRenderer: React.FC<TCellRenderer>,
) =>
  ids.map((id) => ({
    id,
    hide: true,
    cellRenderer: afterRowRenderer,
  })) as TRowDef[];
