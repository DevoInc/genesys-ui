import * as React from 'react';

export type BulkContext = {
  headerBulkMenu?: React.ReactNode;
  headerBulkChecked?: boolean | 'indeterminate';
  onHeaderBulkCheckboxChange?: (event: React.FormEvent<Element>) => void;
  bulkSelection?: number[];
  bulkDisabled?: number[];
  onBulkCheckboxChange?: (
    rowIndex: number,
    event: React.FormEvent<Element>,
  ) => void;
};
