import * as React from 'react';
import { useAnimationRow } from './useAnimationRow';
import { useContainerDimensions } from '@devoinc/genesys-ui';
import { StyledTableRow } from './StyledTableRow';
import { RowObject, RowProps } from './declarations';
import { Cell } from '../cell/Cell';

export const Row: React.FC<RowProps> = ({
  disabled,
  dndSettings = {},
  isSelected,
  index,
  top,
  data: { rows, afterRowManager, columns, onUpdateDecoratedRow },
  style: { density, rowHeight, hasStripedRows, isVirtual },
}) => {
  const { isModifiedRow, isActiveRow } = useAnimationRow();

  const highlighted = isSelected || isActiveRow;

  const { size } = useContainerDimensions();

  const decoratedRow = rows[index];

  const onUpdateRow = (updatedRow: RowObject) =>
    onUpdateDecoratedRow({ ...decoratedRow, row: updatedRow });

  const even = (index + 1) % 2 === 0;

  const setAfterRowHeight = () => {
    if (!size) return;
    const oldHeight = afterRowManager?.getHeight(decoratedRow.id);
    const newHeight = size.clientHeight;
    const needsUpdate = oldHeight !== newHeight;
    const neverCalculated = oldHeight === -1;
    if (neverCalculated || needsUpdate) {
      afterRowManager.setHeight(decoratedRow.id, newHeight);
    }
  };
  React.useEffect(setAfterRowHeight, [afterRowManager, decoratedRow.id, size]);
  const isAfterRowOpen = afterRowManager?.isOpen(decoratedRow.id) || false;

  const { draggableRef, draggableProps, dragHandleProps, isDragging } =
    dndSettings;

  const afterOpenRow = (
    <StyledTableRow
      isAfterRow
      isVirtual={isVirtual}
      key={`row.${decoratedRow.id}.afterRow`}
      opacity={afterRowManager?.getOpacity(decoratedRow.id)}
      style={{ top: top + rowHeight + 'px' }}
    >
      <Cell column={{}}>
        {afterRowManager.function({
          row: decoratedRow.row,
          onUpdateRow,
        })}
      </Cell>
    </StyledTableRow>
  );

  return (
    <>
      <StyledTableRow
        density={density}
        ref={draggableRef}
        disabled={disabled}
        even={even}
        expanded={isAfterRowOpen}
        heightProp={rowHeight}
        highlighted={highlighted}
        isDraggable={!!Object.keys(dndSettings).length}
        isDragging={isDragging}
        isVirtual={isVirtual}
        key={`row.${decoratedRow.id}`}
        modified={isModifiedRow}
        selected={decoratedRow.isSelected}
        striped={hasStripedRows}
        style={{
          top: top + 'px',
        }}
        {...draggableProps}
        {...dragHandleProps}
      >
        {columns.map((column) => (
          <Cell column={column} key={`cell-${column.colId}`} />
        ))}
      </StyledTableRow>
      {isAfterRowOpen && afterOpenRow}
    </>
  );
};
