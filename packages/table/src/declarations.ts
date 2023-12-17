import * as React from 'react';
import { DateContext } from './valueFormatters/date';
import { FilterProps } from './filters/declarations';

export type DefaultColDef = Omit<ColDef, 'id'>;

export type Density = 'default' | 'compact' | 'comfortable';

export interface TableVisualOptions {
  density?: Density;
  striped?: boolean;
  maxHeight?: React.CSSProperties['maxHeight'];
  minWidth?: number;
  rowHeight?: RowHeight;
  resizableColumns?: boolean;
  highlightColumnsOnHover?: boolean;
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

export type Preset = {
  id: string;
} & Omit<ColDef, 'colId'>;

export interface TableOptionsProps {
  columnDefs?: ColDef[];
  defaultColumnDef?: DefaultColDef;
  columnPresets?: Preset[];
  context?: {
    [key: string]: unknown;
  };
  visualOptions?: TableVisualOptions;
  texts?: TextsType;
  showFilters?: boolean;
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

export type ColDef = {
  id: string;
  headerName?: string;
  // type?: string;
  preset?: string;

  editable?: boolean;
  cellEditor?:
    | React.FC<CellRendererParams>
    | (({ value, onChange }: CellEditorParams) => React.ReactNode);
  cellRenderer?:
    | React.FC<CellRendererParams>
    | (({ value, columnDef }: CellRendererParams) => React.ReactNode);
  valueFormatter?: (value: unknown, context: DateContext) => void;

  cellFilter?:
    | React.FC<FilterProps>
    | (({ colDef }: FilterProps) => React.ReactNode);
  cellFilterParams?: { [key: string]: unknown };

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
  resizable?: boolean;
};

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

export interface MeasuresConfig {
  wrapper: {
    height: number;
    width: number;
  };
  body: {
    total: {
      height: number;
      width: number;
    };
    visible: {
      height: number;
      width: number;
    };
  };
}

export interface OccupiedWidth {
  percentage: number;
  definedColDefs: number;
}
