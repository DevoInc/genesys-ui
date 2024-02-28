import * as React from 'react';

import { DateContext } from './valueFormatters/date';

export type Density = 'default' | 'compact' | 'comfortable';

export type TextsType = {
  cell: {
    editTooltip?: string;
    editSaveTooltip?: string;
  };
  editor: {
    editorTextLabel?: string;
  };
};

export type CellVerAlign = 'top' | 'bottom' | 'center';
export type CellHorAlign = 'left' | 'center' | 'right';

export type ColDef = {
  id: string;
  headerName?: string;
  // type?: string;
  preset?: string;

  editable?: boolean;
  cellEditor?:
    | React.FC<CellEditorProps>
    | (({ value, onChange }: CellEditorProps) => React.ReactNode);

  valueFormatter?: (value: unknown, context: DateContext) => void;
  cellRenderer?:
    | React.FC<CellRendererProps>
    | (({ value, colDef }: CellRendererProps) => React.ReactNode);
  headerRenderer?:
    | React.FC<HeaderRendererProps>
    | (({ colDef }: HeaderRendererProps) => React.ReactNode);

  cellFilter?:
    | React.FC<FilterProps>
    | (({ colDef }: FilterProps) => React.ReactNode);

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
  align?: CellHorAlign;
  verticalAlign?: CellVerAlign;
  textAlign?: React.CSSProperties['textAlign'];
  /** Width of the column expressed in percentage over the width of the table */
  truncateLine?: number;
  toEdge?: boolean;
  headerOnFilterPosition?: boolean;
};

export type Preset = {
  id: string;
} & Omit<ColDef, 'colId'>;

export type DefaultColDef = Omit<ColDef, 'id'>;

export type Row = { [key: string]: unknown };
export type Data = Row[];

export type RowHeight = 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

export interface SizesConfig {
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

export type FilterValue = {
  [key: string]: unknown;
};

export type FilterProps = {
  colDef?: ColDef;
  data?: Data;
  onChange: (value: FilterValue, type: string) => void;
};

export type FilterContext = {
  filterValue: FilterValue;
  showAdvancedFilter: boolean;
  showReset: boolean;
};

export type CellRendererProps = {
  value: unknown;
  colDef: ColDef;
  rowIndex: number;
};

export type HeaderRendererProps = {
  colDef: ColDef;
};

export type CellEditorProps = {
  value?: unknown;
  onChange?: (value: unknown) => void;
  colDef?: ColDef;
  rowIndex: number;
};

export interface ITable {
  data: Data;
  colDefs?: ColDef[];
  defaultColDef?: DefaultColDef;
  columnPresets?: Preset[];
  context?: {
    [key: string]: unknown;
  };
  density?: Density;
  striped?: boolean;
  maxHeight?: React.CSSProperties['maxHeight'];
  minWidth?: number;
  minHeight?: number;
  rowHeight?: number;
  resizableColumns?: boolean;
  highlightColumnsOnHover?: boolean;
  texts?: TextsType;
  showFilters?: boolean;
  onSort?: (colDef: ColDef) => void;
  onFilter?: (colDef: ColDef, value: FilterValue, type: string) => void;
}
