import { TagProps } from '@devoinc/genesys-ui';
import { ColumnType } from '../declarations';

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
  onReset?: (initialValue: CellData) => void;
  tooltipField?: string;
  type?: ColumnType;
  // https://www.ag-grid.com/javascript-data-grid/value-getters/
  valueGetter?: (params) => void;
  // https://www.ag-grid.com/javascript-data-grid/value-formatters/
  valueFormatter?: (value: CellData) => void;
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
