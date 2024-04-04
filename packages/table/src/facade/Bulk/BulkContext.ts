import * as React from 'react';

export type TBulkContext = {
  headerBulkMenu?: ({
    setOpened,
    toggle,
    isOpened,
  }: {
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
    toggle: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    isOpened: boolean;
  }) => React.ReactNode;
  headerBulkChecked?: boolean | 'indeterminate';
  onHeaderBulkCheckboxChange?: (event: React.FormEvent<Element>) => void;
  bulkSelection?: number[];
  bulkDisabled?: number[];
  headerDisabled?: boolean;
  onBulkCheckboxChange?: (
    rowIndex: number,
    event: React.FormEvent<Element>,
  ) => void;
};
