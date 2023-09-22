import { TagProps } from '@devoinc/genesys-ui';

export type CellData =
  | string
  | number
  | boolean
  | React.ReactNode
  | TagProps[]
  | undefined;

export interface GenericCellEditorProps {
  value: any;
  onChange?: (newValue: any) => void;
}

interface SortOptions {
  direction?: 'asc' | 'desc';
  sorterFn?: (a: CellData, b: CellData) => number;
}

export type DefaultColDef = ColDef;

export interface TableOptions {
  columnDefs: ColDef[];
  defaultColumnDef: DefaultColDef;
  rowHeight: number;
  getRowHeight: (params) => void;
  context?: {
    [key: string]: unknown;
  };
}

export type ColumnType = 'date' | 'link' | 'number' | 'tags' | 'text';

export type Density = 'default' | 'compact' | 'comfortable';
export interface ColDef {
  // https://www.ag-grid.com/javascript-data-grid/component-cell-editor/
  CellEditor?: () => React.ReactNode;
  cellStyle?: {
    minWidth?: number;
    maxWidth?: number;
    width?: number;
    align?: {
      horizontal?: 'left' | 'center' | 'right';
      vertical?: 'top' | 'bottom' | 'center';
    };
    textAlign?: 'left' | 'center' | 'right';
    density?: 'default' | 'compact' | 'comfortable';
    boxShadow?: 'base' | 'strong';
  };
  colId?: string;
  editable?: boolean;
  expandedRow?: boolean;
  field?: string;
  headerName?: string;
  hide?: boolean;
  initialHide?: boolean;
  isDragging?: boolean;
  isResizable?: boolean;
  onReset?: (initialValue: CellData) => void;
  sort?: SortOptions;
  tooltipField?: string;
  type?: ColumnType;
  // https://www.ag-grid.com/javascript-data-grid/value-getters/
  valueGetter?: (params) => void;
  // https://www.ag-grid.com/javascript-data-grid/value-formatters/
  valueFormatter?: (value: CellData) => void;
}

export interface RowSizes {
  head: { height: number };
  row: {
    height: {
      md: number;
      lg: number;
      xl: number;
      xxl: number;
      xxxl: number;
    };
    br: number;
  };
  cell: {
    horPad: number;
    verPad: number;
    verPadTall: number;
  };
  afterRow: {
    horPad: number;
    verPad: number;
  };
  expanded: {
    horPad: number;
    verPad: number;
  };
  expandedLg: {
    horPad: number;
    verPad: number;
  };
}
