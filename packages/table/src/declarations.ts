import * as React from 'react';

import { DateContext } from './valueFormatters/date';

export type TDensity = 'default' | 'compact' | 'comfortable';

export type TTextsType = {
  cell: {
    editTooltip?: string;
    editSaveTooltip?: string;
  };
  editor: {
    editorTextLabel?: string;
  };
};

export type TCellVerAlign = 'top' | 'bottom' | 'center';
export type TCellHorAlign = 'left' | 'center' | 'right';

export type TColDef = {
  id: string;
  headerName?: string;
  // type?: string;
  preset?: string;

  editable?: boolean;
  cellEditor?:
    | React.FC<TCellEditor>
    | (({ value, onChange }: TCellEditor) => React.ReactNode);

  valueFormatter?: (value: unknown, context: DateContext) => void;
  cellRenderer?:
    | React.FC<TCellRenderer>
    | (({ value, colDef }: TCellRenderer) => React.ReactNode);
  headerRenderer?:
    | React.FC<THeaderRenderer>
    | (({ colDef }: THeaderRenderer) => React.ReactNode);

  cellFilter?: React.FC<TFilter> | (({ colDef }: TFilter) => React.ReactNode);

  context?: {
    [key: string]: unknown;
  };

  sortable?: boolean;
  sort?: 'asc' | 'desc';
  sortIndex?: React.ReactNode;

  expandedRow?: boolean;
  isDragging?: boolean;
  onReset?: (initialValue: unknown) => void;
  tooltipField?: string;
  resizable?: boolean;
  rowHeight?: number;
  minWidth?: number | string;
  width?: number | string;
  align?: TCellHorAlign;
  verticalAlign?: TCellVerAlign;
  textAlign?: React.CSSProperties['textAlign'];
  /** Width of the column expressed in percentage over the width of the table */
  truncateLine?: number;
  toEdge?: boolean;
  headerOnFilterPosition?: boolean;
  hide?: boolean;
};

export type TRowDef = {
  hide?: boolean;
  id: string;
  height?: React.CSSProperties['height'];
  cellRenderer?:
    | React.FC<TCellRenderer>
    | (({ value, colDef, rowIndex, row }: TCellRenderer) => React.ReactNode);
};

export type TAfterRow = {
  hide?: boolean;
  id: string;
};

export type TCellDef = {
  idColumn: string;
  idRow: string;
  hide?: boolean;
};

export type TPreset = {
  id: string;
} & Omit<TColDef, 'colId'>;

export type TDefaultColDef = Omit<TColDef, 'id'>;

export type TRow = { [key: string]: unknown };
export type TData = TRow[];

export type TRowHeight = 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

export interface TSizesConfig {
  head: { height: number };
  row: {
    height: {
      md: number;
      lg: number;
      xl: number;
      xxl: number;
      xxxl: number;
    };
  };
  cell: {
    horPad: number;
    verPad: number;
  };
}

export type TFilterValue = {
  [key: string]: unknown;
};

export type TFilter = {
  colDef?: TColDef;
  data?: TData;
  onChange: (value: TFilterValue, type: string) => void;
};

export type TFilterContext = {
  filterValue: TFilterValue;
  showAdvancedFilter: boolean;
  showReset: boolean;
};

export type TCellRenderer = {
  value: unknown;
  colDef: TColDef;
  rowIndex: number;
  row: TRow;
};

export type THeaderRenderer = {
  colDef: TColDef;
};

export type TCellEditor = {
  value?: unknown;
  onChange?: (value: unknown) => void;
  colDef?: TColDef;
  rowIndex: number;
};

export interface ITable {
  data: TData;
  colDefs?: TColDef[];
  rowDefs?: TRowDef[];
  afterRowDefs?: TAfterRow[];
  defaultColDef?: TDefaultColDef;
  columnPresets?: TPreset[];
  context?: {
    [key: string]: unknown;
  };
  density?: TDensity;
  striped?: boolean;
  maxHeight?: React.CSSProperties['maxHeight'];
  minWidth?: number;
  minHeight?: number;
  rowHeight?: number;
  resizableColumns?: boolean;
  highlightColumnsOnHover?: boolean;
  texts?: TTextsType;
  showFilters?: boolean;
  onSort?: (colDef: TColDef) => void;
  onFilter?: (colDef: TColDef, value: TFilterValue, type: string) => void;
}
