import * as React from 'react';
import { DateContext } from './valueFormatters/date';

export type DefaultColDef = Omit<ColDef, 'id'>;

type Types = { id: string };
type TypesColDef = Omit<ColDef, 'colId'>;
export type Density = 'default' | 'compact' | 'comfortable';

export interface TableVisualOptions {
  density?: Density;
  striped?: boolean;
  maxHeight?: React.CSSProperties['maxHeight'];
  minWidth?: number;
  rowHeight?: RowHeight;
}

export interface TableVisualOptions {
  density?: Density;
  striped?: boolean;
  maxHeight?: React.CSSProperties['maxHeight'];
  minWidth?: number;
  rowHeight?: RowHeight;
}

export type TextsType = {
  general: {
    noData?: React.ReactNode;
    noResults?: React.ReactNode;
  };
  cell: {
    editTooltip?: string;
    editSaveTooltip?: string;
  };
  editor: {
    editorTextLabel?: string;
  };
};

export interface TableOptionsProps {
  columnDefs?: ColDef[];
  defaultColumnDef?: DefaultColDef;
  types?: (Types & TypesColDef)[];
  context?: {
    [key: string]: unknown;
  };
  visualOptions?: TableVisualOptions;
  texts?: TextsType;
}

export interface CellRendererParams {
  value: unknown;
  columnDef: ColDef;
}

export type CellVerAlign = 'top' | 'bottom' | 'center';
export type CellHorAlign = 'left' | 'center' | 'right';

export interface ColumnCellStyleProps {
  align?: {
    horizontal?: CellHorAlign;
    vertical?: CellVerAlign;
  };
  textAlign?: React.CSSProperties['textAlign'];
  /** Width of the column expressed in percentage over the width of the table */
  width?: number;
  truncateLine?: number;
  toEdge?: boolean;
}

type EditCellOnChange = (newValue: unknown) => void;

interface CellEditorParams {
  value: unknown;
  onChange: EditCellOnChange;
}

interface CellRendererConfig {
  onChange?: EditCellOnChange;
  [key: string]: any;
}

export interface ColDef {
  id: string;
  headerName?: string;
  type?: string;

  editable?: boolean;
  CellEditor?: ({ value, onChange }: CellEditorParams) => React.ReactNode;
  CellRenderer?: ({ value, columnDef }: CellRendererParams) => React.ReactNode;
  valueFormatter?: (value: unknown, context: DateContext) => void;

  // revisar
  cellRendererConfig?: CellRendererConfig;
  context?: {
    [key: string]: unknown;
  };

  cellStyle?: ColumnCellStyleProps;
  expandedRow?: boolean;
  isDragging?: boolean;
  onReset?: (initialValue: unknown) => void;
  tooltipField?: string;
}

export type RowHeight = 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

export interface MeasuresConfig {
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

export interface OccupiedWidth {
  percentage: number;
  definedColDefs: number;
}
