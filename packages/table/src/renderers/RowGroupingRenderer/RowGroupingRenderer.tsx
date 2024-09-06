import * as React from 'react';

import { IconButtonCollapse } from '@devoinc/genesys-ui';

import type { TCellRenderer } from '../../declarations';
import { TRowGroupingContext } from '../../facade';

export const RowGroupingRenderer: React.FC<TCellRenderer> = ({
  value,
  rowIndex,
  colDef,
}) => {
  const context = colDef?.context as TRowGroupingContext;

  return (
    <IconButtonCollapse
      onClick={(event) => {
        if (context?.onRowGroupingChange) {
          context.onRowGroupingChange(rowIndex, event);
        }
      }}
      state={value ? 'expanded' : 'enabled'}
    />
  );
};
