import * as React from 'react';

import { TColDef } from '../declarations';
import { setHighlight } from '../helpers';

export const useSetHighlight = (colDefs: TColDef[]) => {
  const [newColDefs, setNewColDefs] = React.useState<TColDef[]>(colDefs);

  const updatedHighlightedColDefs = (colDef, isHighlighted) => {
    setNewColDefs(
      setHighlight(newColDefs, colDef.id, isHighlighted)
    );
  };

  const onCellMouseEnter = ({ colDef }) => {
    updatedHighlightedColDefs(colDef, true);
  };

  const onCellMouseLeave = ({ colDef }) => {
    updatedHighlightedColDefs(colDef, false);
  };

  return {
    newColDefs,
    updatedHighlightedColDefs,
    onCellMouseEnter,
    onCellMouseLeave,
  };
};
