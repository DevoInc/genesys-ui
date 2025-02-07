import * as React from 'react';

import { CheckboxControl } from '@devoinc/genesys-ui';

import type { TColDef } from '../../declarations';
import type { TBulkContext } from '../../facade';

export const BulkRendererById: React.FC= ({
  value,
  rowIndex,
  colDef,
} : {
  value: boolean,
  rowIndex: number,
  colDef: TColDef
}) => {
  const context = colDef?.context as TBulkContext;
  return (
    <CheckboxControl
      checked={value}
      aria-label={`Row ${rowIndex} selection`}
      onChange={(event) => {
        if (context?.onBulkCheckboxChange) {
          context.onBulkCheckboxChange(rowIndex, event);
        }
      }}
    />
  );
};
