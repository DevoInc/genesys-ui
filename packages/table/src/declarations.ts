import { StyledTableProps } from './core/Table/StyledTable';
import { DateContext } from './valueFormatters/date';

export type DefaultColDef = Omit<ColDef, 'id'>;

type Types = { id: string };
type TypesColDef = Omit<ColDef, 'colId'>;

export interface TableOptionsProps {
  columnDefs?: ColDef[];
  defaultColumnDef?: DefaultColDef;
  types?: (Types & TypesColDef)[];
  context?: {
    [key: string]: unknown;
  };
  style?: {
    table?: StyledTableProps;
    row?: { height: number };
  };
}

export interface CellRendererParams {
  value: unknown;
  columnDef: ColDef;
}

interface CellEditorParams {
  value: unknown;
  onChange: () => void;
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
  cellRendererConfig?: any;
  context?: {
    [key: string]: unknown;
  };

  cellStyle?: {
    minWidth?: number;
    maxWidth?: number;
    width?: number;
    align?: {
      horizontal?: 'left' | 'center' | 'right';
      vertical?: 'top' | 'bottom' | 'center';
    };
    textAlign?: 'left' | 'center' | 'right';
    truncateLine?: number;
    density?: 'default' | 'compact' | 'comfortable';
    boxShadow?: 'base' | 'strong';
  };
  expandedRow?: boolean;
  isDragging?: boolean;
  onReset?: (initialValue: unknown) => void;
  tooltipField?: string;
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
