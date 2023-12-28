import * as React from 'react';
import { DateContext } from './valueFormatters/date';
import { FilterProps } from './filters/declarations';
import { CellRendererProps } from './renderers/declarations';
import { CellEditorProps } from './editors/declarations';

export type DefaultColDef = Omit<ColDef, 'id'>;

export type Density = 'default' | 'compact' | 'comfortable';

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

  cellFilter?:
    | React.FC<FilterProps>
    | (({ colDef }: FilterProps) => React.ReactNode);

  context?: {
    [key: string]: unknown;
  };

  sortable?: boolean;
  sort?: 'asc' | 'desc';
  sortIndex?: React.ReactNode;

  cellStyle?: ColumnCellStyleProps;
  expandedRow?: boolean;
  isDragging?: boolean;
  onReset?: (initialValue: unknown) => void;
  tooltipField?: string;
  resizable?: boolean;
  rowHeight?: number;
};

export type Data = { [key: string]: unknown }[];

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

export interface OccupiedWidth {
  percentage: number;
  definedColDefs: number;
}

export type Size = {
  width: number;
  height: number;
};
