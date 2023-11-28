import { StyledTableProps } from './core/Table/StyledTable';
import { DateContext } from './valueFormatters/date';
import { StyledTableWrapperProps } from './core/Table/StyledTableWrapper';
import { getPxFromRem } from '@devoinc/genesys-ui';

export type DefaultColDef = Omit<ColDef, 'id'>;

type Types = { id: string };
type TypesColDef = Omit<ColDef, 'colId'>;
export type Density = 'default' | 'compact' | 'comfortable';

export interface TableStyles {
  density?: Density;
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
  style?: TableStyles;
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
    boxShadow?: 'base' | 'strong';
    toEdge: boolean;
  };
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
