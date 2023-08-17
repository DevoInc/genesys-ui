import { ColumnTypeCombinerType } from '../declarations';

export interface DateContext {
  tz: string;
  formatDate: string;
  locale: string;
}

type Context =
  | {
      [key: string]: unknown;
    }
  | DateContext;
export interface ColDef {
  // identificador unico, si no existe se usara field y si no se añadira un identificador unico
  colId?: string;
  // example name or medal.gold
  // { name: santi, medal: { gold: 2 }}
  field?: string;
  type?: ColumnTypeCombinerType;
  // https://www.ag-grid.com/javascript-data-grid/value-getters/
  valueGetter?: (params) => void;
  // https://www.ag-grid.com/javascript-data-grid/value-formatters/
  valueFormatter?: (
    value: string | number,
    context: Context
  ) => string | number;
  hide?: boolean;
  initialHide?: boolean;
  editable?: boolean;
  // https://www.ag-grid.com/javascript-data-grid/component-cell-editor/
  cellEditor?: (value) => string | number | React.ReactNode;
  width?: number;
  maxWidth?: number;
  minWidth?: number;
  headerName?: string;
  cellStyle?: {
    align?: {
      horizontal?: 'left' | 'center' | 'right';
      vertical?: 'top' | 'bottom' | 'center';
    };
    textAlign?: 'left' | 'center' | 'right';
    density?: 'default' | 'compact' | 'comfortable';
  };
  tooltipField?: string;
  expandedRow?: boolean;
  boxShadow?: 'base' | 'strong';
  isDragging?: boolean;
  context?: Context;
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
