import * as React from 'react';
import { useTheme } from 'styled-components';

import { useContainerDimensions } from '@devoinc/genesys-ui';

import { StyledTableCellWrapper } from './StyledTableCellWrapper';

import {
  COLUMN_TYPE,
  AUX_COLUMN_TYPE,
  getFixedSizesObj,
} from '../../constants';
import { getRenderer } from './cellRenderer';
import { ColDef } from './declarations';

interface CellProps {
  children?: React.ReactNode;
  column?: ColDef;
  renderer?: 'default' | 'popper' | 'link' | 'tag' | 'groupTags';
}

export const Cell: React.FC<CellProps> = ({
  children,
  column,
  renderer,
  expanded,
  // hasComplexContent,
  // hasStripedRows,
  // isAfterRow,
  // isAfterRowOpen,
  // isDragging,
  // isEvenRow,
  // isExpanded,
  // onClick,
  //rowLength,
  // uso la propiedad para pasar estilos y no tener que usar el contexto (density, tallRows)
  // styles,
  // width,
  // data,
  // onClose,
  // renderer,
  // hasPopper,
}) => {
  const renderContent = getRenderer(renderer);
  // const { setRef: contentRef, size: measures } = useContainerDimensions();
  // const tableTokens = useTheme().cmp.tabs.container;

  // /** If the content is higher than its parent cell*/
  // const [innerScroll, setInnerScroll] = React.useState(false);
  // React.useEffect(() => {
  //   if (measures) {
  //     const newInnerScroll = measures.scrollHeight > measures.clientHeight;
  //     if (newInnerScroll !== innerScroll) {
  //       setInnerScroll(newInnerScroll);
  //     }
  //   }
  // }, [innerScroll, measures, setInnerScroll]);

  // /** If the content is wider than its parent cell*/
  // const [innerEllipsis, setInnerEllipsis] = React.useState(false);
  // const updateInnerEllipsis = () => {
  //   if (measures) {
  //     const visibleWidth = measures.clientWidth;
  //     const totalWidth = measures.scrollWidth;
  //     const newInnerEllipsis = !!visibleWidth && totalWidth > visibleWidth;
  //     if (newInnerEllipsis !== innerEllipsis) {
  //       setInnerEllipsis(newInnerEllipsis);
  //     }
  //   }
  // };
  // React.useEffect(updateInnerEllipsis, [
  //   measures,
  //   innerEllipsis,
  //   setInnerEllipsis,
  // ]);

  // const isEditable = Boolean(column.editConf);

  // const renderCellContent = () => {
  //   const StyledContent =
  //     styles.tallRows && !isAfterRow && column.type === COLUMN_TYPE.LONG_TEXT
  //       ? StyledTableCellContentLongText
  //       : !isAfterRow && !(column.type === COLUMN_TYPE.BOOLEAN && isEditable)
  //       ? StyledTableCellContentShortText
  //       : StyledTableCellContentText;

  //   return (
  //     <StyledContent
  //       data-testid="cell"
  //       editable={isEditable}
  //       // editMode={isExpanded && isEditable}
  //       typeProp={column.type}
  //       expanded={isExpanded}
  //       ref={contentRef}
  //       // innerScroll={innerScroll}
  //       innerEllipsis={innerEllipsis}
  //     >
  //       {children}
  //     </StyledContent>
  //   );
  // };

  // const hiddenContent = innerEllipsis || innerScroll;

  // If isEditable => !isExapandable. Column prop.
  // Rename to allowToExpandOnClick
  // const hasPopper = isEditable
  //   ? !column.editConf?.hasNoPopover
  //   : hiddenContent && column.expandConfig?.isExpandableOnEllipsis;

  // Move texts to column conf
  // const tooltipMessage =
  //   column.tooltipMessage ||
  //   (hasPopper ? column.texts?.expandCellTooltip : null);

  // const onClickInnerCell = () => {
  //   if (hasPopper) {
  //     onClick();
  //   }
  // };

  // const getCellActionsWidth = (column, tokens) => {
  //   if (!column.cellActions) return 0;
  //   const actionsLength = column.cellActions?.length || 0;
  //   const width =
  //     actionsLength * getFixedSizesObj(tokens).cellActions.actionSize;
  //   let extraWidth = 0;
  //   if (actionsLength > 1) {
  //     extraWidth =
  //       (actionsLength - 1) * getFixedSizesObj(tokens).cellActions.spacing;
  //   }
  //   return width + extraWidth;
  // };
  debugger;
  return (
    <StyledTableCellWrapper
      cellStyle={column.cellStyle}
      minWidth={column.minWidth}
      editable={column.editable}
      data-tip={!expanded ? column.tooltipField : null}
      expandedRow={column.expandedRow}
      // para contenido de mas de 120 caracteres???
      // tall={hasLongContent}
      // para que no tenga padding
      // toEdge={column.styleConf?.toEdge}

      // actionsCell={column.auxType === AUX_COLUMN_TYPE.ACTIONS}
      // hasComplexContent={hasComplexContent}
      // innerActions={column.cellActions}
      // innerActionsWidth={getCellActionsWidth(column, tableTokens)}
      // innerEllipsis={innerEllipsis}
      // isEvenRow={isEvenRow}
      // isDragging={isDragging}
      // onClick={onClickInnerCell}
      // striped={hasStripedRows}
      // toLeftEdge={column.styleConf?.toLeftEdge}
    >
      {renderContent({ value: children, columnDef: column })}
    </StyledTableCellWrapper>
  );
};
