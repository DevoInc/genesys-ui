import * as React from 'react';

import { IconButtonCollapse } from '@devoinc/genesys-ui';

import type { TCellRenderer } from '../../declarations';
import { TRowGroupingContext } from '../../facade';

export const RowGroupingRenderer: React.FC<TCellRenderer> = ({
  colDef,
  row,
}) => {
  const context = colDef?.context as TRowGroupingContext;
  const isOpened = context.selection.includes(row.id as string);

  return (
    <IconButtonCollapse
      onClick={() => {
        if (context?.onClick) {
          context.onClick(row.id as string);
        }
      }}
      state={isOpened ? 'expanded' : 'enabled'}
    />
  );
};
