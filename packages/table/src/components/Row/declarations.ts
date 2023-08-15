import { DefaultTheme } from 'styled-components';
import { ColDef } from '../Cell/declarations';
import { Density } from '../declarations';
interface DragNDropSettings {
  draggableRef?: React.Ref<HTMLTableRowElement>;
  draggableProps?: object;
  dragHandleProps?: object;
  isDragging?: boolean;
}

export interface RowObject {
  id: string;
  isSelected: boolean;
  row: RowObject;
}

interface Style {
  density: Density;
  height: number;
  columnsWidth: number;
  hasStripedRows: boolean;
  isVirtual: boolean;
  tableWidth: number;
  even?: boolean;
}

export interface RowProps {
  columnDefs: ColDef[];
  data?: { [key: string]: string | number };
  style?: Style;
  defaultColumnDefs?: ColDef[];
  dndSettings?: DragNDropSettings;
}

export interface StyledTableRowProps {
  density: Density;
  disabled: boolean;
  even: boolean;
  expanded: boolean;
  heightProp: string;
  highlighted: boolean;
  isAfterRow: boolean;
  isDraggable: boolean;
  isDragging: boolean;
  isVirtual: boolean;
  modified: boolean;
  opacity: number;
  selected: boolean;
  striped: boolean;
  theme: DefaultTheme;
}
