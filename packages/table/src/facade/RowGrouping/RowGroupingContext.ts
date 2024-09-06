import * as React from 'react';

export type TRowGroupingContext = {
  onRowGroupingChange?: (
    rowIndex: number,
    event: React.FormEvent<Element>,
  ) => void;
};