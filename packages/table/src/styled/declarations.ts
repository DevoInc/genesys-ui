import { AllHTMLAttributes } from 'react';
import { DefaultTheme } from 'styled-components';

import { BaseSize } from '@devoinc/genesys-ui';

export type cellSize = BaseSize;

export type ColumnTypeCombinerType =
  | 'boolean'
  | 'custom'
  | 'date'
  | 'link'
  | 'longText'
  | 'number'
  | 'status'
  | 'tags'
  | 'text';

export interface StyledTableCellProps<T = Element> {
  contentEditable?: AllHTMLAttributes<T>['contentEditable'];
  expanded?: boolean;
  size?: cellSize;
  theme?: DefaultTheme;
  typeProp?: ColumnTypeCombinerType;
  editable?: boolean;
  bodyHeight?: number;
  density?: 'default' | 'compact' | 'comfortable';
  expandedRow?: boolean;
  isAfterRow?: boolean;
  columnHighlight?: boolean;
  highlighted?: boolean;
  rowHighlight?: boolean;
  striped?: boolean;
  tableHeight?: number;
  widthProp?: number;
  actionsCell?: boolean;
  align?: {
    horizontal?: 'left' | 'center' | 'right';
    vertical?: 'top' | 'bottom' | 'center';
  };
  heightProp?: number;
  innerActions?: {
    icon: any;
    onClick: () => void;
  }[];
  innerActionsWidth?: number;
  innerEllipsis?: boolean;
  hasComplexContent?: boolean;
  isCellPopover?: boolean;
  isDragging?: boolean;
  isEvenRow?: boolean;
  resizable?: boolean;
  tall?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  toEdge?: boolean;
  toLeftEdge?: boolean;
  toRightEdge?: boolean;
  disabled?: boolean;
  even?: boolean;
  isDraggable?: boolean;
  isVirtual?: boolean;
  modified?: boolean;
  opacity?: number;
  selected?: boolean;
  hasPopper?: boolean;
  hasChildren?: boolean;
  tabIndex?: string | null;
  auxType?: string;
  expandedLg?: boolean;
  rowLength?: number;
}
