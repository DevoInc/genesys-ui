import * as React from 'react';
import { CSSProp, DefaultTheme } from 'styled-components';

import { DateContext } from './valueFormatters/date';

export type TDensity = 'default' | 'compact' | 'comfortable';

export type TTextsType = {
  cell: {
    editTooltip?: string;
  };
};

export type TCellVerAlign = 'top' | 'bottom' | 'center';
export type TCellHorAlign = 'left' | 'center' | 'right';
export type TStateRow =
  | 'enabled'
  | 'disabled'
  | 'expanded'
  | 'highlighted'
  | 'modified'
  | 'selected'
  | 'created'
  | 'deleted';

// Definitions

export type TColDef = {
  /** Id of the column */
  id: string;
  headerName?: string;
  preset?: string;

  editable?: boolean;
  cellEditor?:
    | React.FC<TCellEditor>
    | (({ value, onChange, colDef }: TCellEditor) => React.ReactNode);

  valueFormatter?: (value: unknown, context: DateContext) => void;
  cellRenderer?:
    | React.FC<TCellRenderer>
    | (({
        value,
        colDef,
        rowDef,
        rowIndex,
        row,
      }: TCellRenderer) => React.ReactNode)
  cellWrapper?:
    | React.FC<TCellWrapper>
    | (({
        cellDef,
        colDef,
        rowIndex,
        data,
        row,
      }: TCellWrapper) => React.ReactNode);
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

  onReset?: (initialValue: unknown) => void;
  tooltipField?: string;
  resizable?: boolean;
  minWidth?: number;
  width?: number;
  rowHeight?: number;
  align?: TCellHorAlign;
  verticalAlign?: TCellVerAlign;
  textAlign?: React.CSSProperties['textAlign'];
  /** Width of the column expressed in percentage over the width of the table */
  truncateLine?: number;
  toEdge?: boolean;
  headerOnFilterPosition?: boolean;
  hide?: boolean;
  style?: CSSProp;
  isHighlighted?: boolean;
};

export type TPresetRow =
  | 'created'
  | 'deleted'
  | 'disabled'
  | 'draggable'
  | 'expanded'
  | 'highlighted'
  | 'isAfterRow'
  | 'isDragging'
  | 'modified'
  | 'selected';

export type TRowDef = {
  hide?: boolean;
  id: string;
  preset?: TPresetRow;
  height?: number;
  minHeight?: number;
  cellRenderer?:
    | React.FC<TCellRenderer>
    | (({
        value,
        colDef,
        rowIndex,
        row,
        rowDef,
      }: TCellRenderer) => React.ReactNode);
  style?:
    | CSSProp
    | (({
        theme,
        evenOddType,
        striped,
      }: {
        theme: DefaultTheme;
        evenOddType: 'even' | 'odd';
        striped: boolean;
      }) => CSSProp);
  context?: {
    [key: string]: unknown;
  };
};

export type TCellDef = {
  colId: string;
  rowId: string;
  hide?: boolean;
  style?: CSSProp;
  isSelected?: boolean;
  isEditMode?: boolean;
};

export type THeaderCellDef = {
  colId: string;
  hide?: boolean;
  style?: CSSProp;
  isSelected?: boolean;
};

export type TColPreset = {
  /** Id of the preset */
  id: string;
} & Omit<TColDef, 'id'>;

export type TRowPreset = {
  id: string;
} & Omit<TRowDef, 'id'>;

export type TDefaultColDef = Omit<TColDef, 'id'>;
export type TDefaultRowDef = Omit<TRowDef, 'id'>;

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
  rowDef: TRowDef;
};

export type TCellWrapper = {
  colDef: TColDef;
  rowIndex: number;
  row: TRow;
  cellDef: TCellDef;
  data: unknown;
};

export type THeaderRenderer = {
  colDef: TColDef;
};

export type TCellEditor = {
  value?: unknown;
  onChange?: (value: unknown) => void;
  colDef?: TColDef;
};

export interface ITable {
  id: string;
  data: TData;
  // columns
  colDefs?: TColDef[];
  defaultColDef?: TDefaultColDef;
  columnPresets?: TColPreset[];
  resizableColumns?: boolean;
  // rows
  rowDefs?: TRowDef[];
  defaultRowDef?: TDefaultRowDef;
  rowPresets?: TRowPreset[];
  rowHeight?: number;
  // cell
  cellDefs?: TCellDef[];
  onCellDataChange?: ({ colDef, value, rowIndex }) => void;
  headerCellDefs?: THeaderCellDef[];
  textsCell?: ({
    colDef,
    rowDef,
    cellDef,
    data,
    row,
    rowIndex,
  }: {
    colDef: TColDef;
    rowDef: TRowDef;
    cellDef: TCellDef;
    data: unknown;
    row: TRow;
    rowIndex: number;
  }) => string;
  headerCellDefs?: THeaderCellDef[];

  context?: {
    [key: string]: unknown;
  };
  density?: TDensity;

  striped?: boolean;
  stripedFn?: (index: number, row: TRow) => boolean;

  maxHeight?: React.CSSProperties['maxHeight'];
  minWidth?: number;
  minHeight?: number;

  texts?: TTextsType;
  showFilters?: boolean;

  highlightRowOnHover?: boolean;
  highlightRowOnHoverFn?: (rowDef: TRowDef) => boolean;

  onSort?: (colDef: TColDef) => void;
  onFilter?: (colDef: TColDef, value: TFilterValue, type: string) => void;
  onCellMouseEnter?: ({
    colDef,
    rowDef,
    cellDef,
  }: {
    colDef: TColDef;
    rowDef: TRowDef;
    cellDef: TCellDef;
  }) => void;
  onCellMouseLeave?: ({
    colDef,
    rowDef,
    cellDef,
  }: {
    colDef: TColDef;
    rowDef: TRowDef;
    cellDef: TCellDef;
  }) => void;
  onHeaderCellClick?: ({
    colDef,
    rowDef,
    cellDef,
    rowIndex,
    event,
  }: {
    colDef?: TColDef;
    rowDef?: TRowDef;
    cellDef?: TCellDef;
    rowIndex?: number;
    event?: React.MouseEvent;
  }) => void;
  onCellClick?: ({
    colDef,
    rowDef,
    cellDef,
    rowIndex,
    event,
  }: {
    colDef?: TColDef;
    rowDef?: TRowDef;
    cellDef?: TCellDef;
    rowIndex?: number;
    event: React.MouseEvent;
  }) => void;
  onCellDoubleClick?: ({
    colDef,
    rowDef,
    cellDef,
    rowIndex,
  }: {
    colDef?: TColDef;
    rowDef?: TRowDef;
    cellDef?: TCellDef;
    rowIndex?: number;
  }) => void;
  onCellKeyUp?: ({
    colDef,
    rowDef,
    cellDef,
    event,
    rowIndex,
  }: {
    colDef?: TColDef;
    rowDef?: TRowDef;
    cellDef?: TCellDef;
    event?: React.KeyboardEvent;
    rowIndex?: number;
  }) => void;
  onCellKeyDown?: ({
    colDef,
    rowDef,
    cellDef,
    event,
    rowIndex,
  }: {
    colDef?: TColDef;
    rowDef?: TRowDef;
    cellDef?: TCellDef;
    event?: React.KeyboardEvent;
    rowIndex?: number;
  }) => void;
  onHeaderCellDoubleClick?: ({ colDef }: { colDef: TColDef }) => void;
  onHeaderCellKeyUp?: ({
    colDef,
    event,
  }: {
    colDef: TColDef;
    event: React.KeyboardEvent;
  }) => void;
  onHeaderCellKeyDown?: ({
    colDef,
    event,
  }: {
    colDef: TColDef;
    event: React.KeyboardEvent;
  }) => void;
  onRowDoubleClick?: ({
    rowDef,
    rowIndex,
  }: {
    rowDef: TRowDef;
    rowIndex: number;
  }) => void;
  onRowKeyUp?: ({
    event,
    rowDef,
    rowIndex,
  }: {
    event: React.KeyboardEvent;
    rowDef: TRowDef;
    rowIndex: number;
  }) => void;
  onRowKeyDown?: ({
    event,
    rowDef,
    rowIndex,
  }: {
    event: React.KeyboardEvent;
    rowDef: TRowDef;
    rowIndex: number;
  }) => void;
}
