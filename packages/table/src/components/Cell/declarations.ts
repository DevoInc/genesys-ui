import { TagProps } from '@devoinc/genesys-ui';
import { ColumnType } from '../declarations';

export type CellData =
  | string
  | number
  | boolean
  | React.ReactNode
  | TagProps[]
  | undefined;

export interface CellEditorProps {
  value: any;
  onChange?: (newValue: any) => void;
}

export interface ColDef {
  // identificador unico, si no existe se usara field y si no se añadira un identificador unico
  colId?: string;
  // example name or medal.gold
  // { name: santi, medal: { gold: 2 }}
  field?: string;
  type?: ColumnType;
  // https://www.ag-grid.com/javascript-data-grid/value-getters/
  valueGetter?: (params) => void;
  // https://www.ag-grid.com/javascript-data-grid/value-formatters/
  valueFormatter?: (value: CellData) => void;
  hide?: boolean;
  initialHide?: boolean;
  editable?: boolean;
  // https://www.ag-grid.com/javascript-data-grid/component-cell-editor/
  CellEditor?: () => React.ReactNode;
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
  onChange?: (newValue: CellData) => void;
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
