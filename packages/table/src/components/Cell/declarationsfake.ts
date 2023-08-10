import { TagProps } from '@devoinc/genesys-ui';
import * as React from 'react';
import { DefaultTheme } from 'styled-components';

export type ColumnsCellProps = BaseColumnsCellProps &
  (
    | {
        editable?: boolean;
        editConf?: {
          /** Component to be used inside the popover to edit the cell content */
          CellPopoverContent?: React.FC<any>;
          /** @INTERNAL: Editable component without popover */
          hasNoPopover?: boolean;
          /** @INTERNAL: Editable popover with footer (close and/or save) */
          hasEditionFooter?: boolean;
          /** @INTERNAL: Use text area component instead of input component */
          isLongText?: boolean;
          /** @INTERNAL: Automatically saves and closes the popover onChange */
          saveOnChange?: boolean;
        };
      }
    | {
        editable?: boolean;
        editConf?: never;
      }
    | {
        editable?: never;
        editConf?: never;
      }
  );

export interface BooleanConfigObjectProps {
  color?: TagProps['colorScheme'];
  icon?: string;
  text: string;
}

export interface BaseColumnsCellProps {
  // id?: string;
  dataKey?: string;
  Header?: string;
  cellActions?: {
    icon: any;
    onClick: () => void;
  }[];
  // type?: ColumnTypeCombinerType;
  auxType?: string;
  expandConfig?: {
    isExpandableOnEllipsis: boolean;
    hasLargeContent: boolean;
  };
  styleConf?: {
    align?: {
      horizontal?: 'left' | 'center' | 'right';
      vertical?: 'top' | 'bottom' | 'center';
    };
    toEdge?: boolean;
    toLeftEdge?: boolean;
  };
  texts?: {
    editCellTooltip?: string;
    expandCellTooltip?: string;
  };
  tooltipMessage?: string;
  // asi se hacia antes, pero lo considero un acople innecesario
  // const hasComplexContent =
  //   column.type === COLUMN_TYPE.TAGS ||
  //   (column.type === COLUMN_TYPE.BOOLEAN && !isEditable) ||
  //   (column.type &&
  //     column.type.startsWith(COLUMN_TYPE.STATUS) &&
  //     hasColorConfig(column.statusConfig));
  // esta propiedad coloca un padding rigth mayor
  hasComplexContent?: boolean;
  // tagConfig: {
  //   [key: string]: TagProps;
  // };
  onLinkClick: (link) => void;
}

export interface StylesCellProps {
  density?: 'default' | 'compact' | 'comfortable';
  tallRows?: boolean;
  rowHeight?: number;
  bodyHeight?: number;
  highlightColumnsOnHover?: boolean;
  highlightRowsOnHover?: boolean;
  hasStripedRows?: boolean;
  tableHeight?: number;
}

export interface CellProps {
  // id?: string;
  // dataKey == field
  // dataKey?: string;
  // editable?: boolean;
  // Header?: string;
  children?: React.ReactNode;
  column: ColumnsCellProps;
  hasComplexContent?: boolean;
  hasStripedRows?: boolean;
  isAfterRow?: boolean;
  isAfterRowOpen?: boolean;
  isDragging?: boolean;
  isEvenRow?: boolean;
  isExpanded?: boolean;
  onClick?: () => void;
  // no se usa
  // rowLength?: number;
  styles?: StylesCellProps;
  // height?: number;
  isExpandedLg?: boolean;
  isModified?: boolean;
  // minWidth?: number;
  onClose?: () => void;
  onSave?: (e) => void;
  data?: {
    texts?: {
      control: {
        controlDensity: string;
        controlDefaultDensity: string;
        controlComfortableDensity: string;
        controlCompactDensity: string;
        controlOptionsMenuTooltip: string;
      };
      general: {
        cellEditionCancel: string;
        cellEditionSave: string;
        cellEditionTextareaLabel: string;
        checkedRowsTextFn: () => void;
        expandRowTooltip: string;
        noData: string;
        noResults: string;
        rowAfterRowTriggerTooltip: string;
        rowDropdownTriggerTooltip: string;
        selectRowTooltip: string;
      };
      filter: {
        filterGlobalPlaceHolder: string;
        filterGlobalLabel: string;
        filterGlobalChipLabel: string;
        filterBtn: string;
        filterActiveLabel: string;
        filterActiveClearAll: string;
      };
      pagination: {
        firstPageTooltipText: string;
        infoTextFn: () => void;
        lastPageTooltipText: string;
        nextPageTooltipText: string;
        prevPageTooltipText: string;
        rangeText: string;
        selectPageTooltipTextFn: () => void;
      };
      bulkActions: {
        checkboxLabel: string;
        dropdownHeading: string;
        dropdownSubheading: string;
        triggerTooltip: string;
      };
    };
    onUpdateDecoratedRow?: (updatedDecoratedRow) => void;
    columns?: {
      length?: number;
    };
  };
  decoratedRow?: {
    row: any;
    id: string;
  };
  highlighted?: boolean;
  onDataChange?: () => void;
  rowIndex?: string;
  setActiveRow?: (bool) => void;
  width?: number;
  renderer?: string;
  hasPopper?: boolean;
  // review
  cellData: string;
  theme: DefaultTheme;
}

export interface ExpandedContentRefProps {
  scrollHeight?: number;
  clientHeight?: number;
}
