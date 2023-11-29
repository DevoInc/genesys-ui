import * as React from 'react';
import { StyledTableProps } from './core/Table/StyledTable';
import { DateContext } from './valueFormatters/date';
import { StyledTableWrapperProps } from './core/Table/StyledTableWrapper';

export type DefaultColDef = Omit<ColDef, 'id'>;

type Types = { id: string };
type TypesColDef = Omit<ColDef, 'colId'>;
export type Density = 'default' | 'compact' | 'comfortable';

export interface TableVisualOptions {
  density?: Density;
  striped?: boolean;
  wrapper: StyledTableWrapperProps;
  table?: StyledTableProps;
  row?: { height: RowHeight };
}

export interface TableOptionsProps {
  columnDefs?: ColDef[];
  defaultColumnDef?: DefaultColDef;
  types?: (Types & TypesColDef)[];
  context?: {
    [key: string]: unknown;
  };
  visualOptions?: TableVisualOptions;
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
