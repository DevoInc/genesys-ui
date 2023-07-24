import { ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';
import { ColDef } from '../cell/declarations';

interface DragNDropSettings {
  draggableRef?: React.Ref<HTMLTableRowElement>;
  draggableProps?: object;
  dragHandleProps?: object;
  isDragging?: boolean;
}

interface AfterRowManager {
  setHeight: (id: string, height: number) => void;
  getHeight: (id: string) => number;
  isOpen: (id: string) => boolean;
  getOpacity: (id: string) => number;
  function: ({
    row,
    onUpdateRow,
  }: {
    row: RowObject;
    onUpdateRow: (row: RowObject) => void;
  }) => string | number | ReactNode;
}

export interface RowObject {
  id: string;
  isSelected: boolean;
  row: RowObject;
}

interface Data {
  rows: RowObject[];
  afterRowManager: AfterRowManager;
  columns: ColDef[];
  onUpdateDecoratedRow: (params: object) => void;
}

export type Density = 'default' | 'compact' | 'comfortable';

interface Style {
  density: Density;
  rowHeight: number;
  columnsWidth: number;
  hasStripedRows: boolean;
  isVirtual: boolean;
  tableWidth: number;
}

export interface RowProps {
  disabled?: boolean;
  dndSettings?: DragNDropSettings;
  isSelected?: boolean;
  index: number;
  top?: number;
  data?: Data;
  style?: Style;
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
