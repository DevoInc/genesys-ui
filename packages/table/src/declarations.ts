import { StyledTableProps } from './core/Table/StyledTable';
import { StyledTableWrapperProps } from './core/Table/StyledTableWrapper';
import { DateContext } from './valueFormatters/date';

export type DefaultColDef = ColDef;

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
    wrapper?: StyledTableWrapperProps;
    table?: StyledTableProps;
    row?: { height: React.CSSProperties['height'] };
  };
}

interface CellRendererParams {
  value: unknown;
  columnDef: ColDef;
}

type CellRenderer = ({
  value,
  columnDef,
}: CellRendererParams) => React.ReactNode;

export interface ColDef {
  CellEditor?: (a) => React.ReactNode;
  CellRenderer?: CellRenderer;
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
  isDragging?: boolean;
  onReset?: (initialValue: unknown) => void;
  tooltipField?: string;
  type?: string;
  tagConfig?: any;
  valueFormatter?: (value: unknown, context: DateContext) => void;
  context?: {
    [key: string]: unknown;
  };
}
