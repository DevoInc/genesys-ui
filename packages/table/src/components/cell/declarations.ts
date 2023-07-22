import { TagProps } from '@devoinc/genesys-ui';

export interface ColDef {
  // identificador unico, si no existe se usara field y si no se añadira un identificador unico
  colId?: string;
  // example name or medal.gold
  // { name: santi, medal: { gold: 2 }}
  field?: string;
  type?:
    | 'boolean'
    | 'custom'
    | 'date'
    | 'link'
    | 'longText'
    | 'number'
    | 'status'
    | 'tags'
    | 'text';
  // https://www.ag-grid.com/javascript-data-grid/value-getters/
  valueGetter?: (params) => void;
  // https://www.ag-grid.com/javascript-data-grid/value-formatters/
  valueFormatter?: (params) => void;
  hide?: boolean;
  initialHide?: boolean;
  editable?: boolean;
  // https://www.ag-grid.com/javascript-data-grid/component-cell-editor/
  cellEditor?: () => void;
  width?: number;
  maxWidth?: number;
  minWidth?: number;
  headerName?: string;
  tagConfig?: {
    [key: string]: TagProps;
  };
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
}

export type DefaultColDef = ColDef;

export interface TableOptions {
  columnDefs: ColDef[];
  defaultColumnDef: DefaultColDef;
  rowHeight: number;
  getRowHeight: (params) => void;
}
