import * as React from 'react';

import { CheckboxControl } from '@devoinc/genesys-ui';

import type { TCellRenderer } from '../../declarations';
import type { TBulkContext } from '../../facade';

export const BulkRenderer: React.FC<TCellRenderer> = ({
  value,
  rowIndex,
  colDef,
}) => {
  const context = colDef?.context as TBulkContext;

  let checked = false;
  if (context?.bulkSelection) {
    checked = context.bulkSelection.includes(rowIndex);
  } else {
    checked = !!value as boolean;
  }

  let disabled = false;
  if (context?.bulkDisabled) {
    disabled = context.bulkDisabled.includes(rowIndex);
  }
  return (
    <CheckboxControl
      checked={checked}
      disabled={disabled}
      aria-label={`Row ${rowIndex} selection`}
      onChange={(event) => {
        if (context?.onBulkCheckboxChange) {
          context.onBulkCheckboxChange(rowIndex, event);
        }
      }}
    />
  );
};
