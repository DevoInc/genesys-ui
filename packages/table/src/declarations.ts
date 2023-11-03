import { StyledTableProps } from './core/Table/StyledTable';
import { StyledTableWrapperProps } from './core/Table/StyledTableWrapper';
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
    wrapper?: StyledTableWrapperProps;
    table?: StyledTableProps;
    body?: { height: React.CSSProperties['height'] };
    row?: { height: number };
  };
}

interface CellRendererParams {
  value: unknown;
  columnDef: ColDef;
}

interface CellEditorParams {
  value: unknown;
  onChange: void;
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
  tagConfig?: any;
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
    density?: 'default' | 'compact' | 'comfortable';
    boxShadow?: 'base' | 'strong';
  };
  expandedRow?: boolean;
  isDragging?: boolean;
  onReset?: (initialValue: unknown) => void;
  tooltipField?: string;
}
