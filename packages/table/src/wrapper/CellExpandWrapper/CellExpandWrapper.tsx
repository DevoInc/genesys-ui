import * as React from 'react';
import { useClickAway } from 'ahooks';

import { GIZoomExpandMaximizeWindow } from '@devoinc/genesys-icons';
import { Panel } from '@devoinc/genesys-ui';

import { StyledCellMarker } from '../StyledCellMarker';
import { TableContext } from '../../context';
import type { TCellWrapper } from '../../declarations';
import { EditorFloatingWrapper } from '../../editors/components';
import { StyledCellExpandWrapper } from './StyledCellExpandWrapper';

export const CellExpandWrapper: React.FC<TCellWrapper> = ({
  cellDef,
  colDef,
  data,
  row,
  rowIndex,
  width,
  height,
}) => {
  const { density, onCellClickAway } = React.useContext(TableContext);
  const CellRenderer = colDef.cellRenderer;
  const CellExpand = colDef?.cellExpand ?? CellRenderer;
  const isExpanded = cellDef?.isExpanded;

  const ref = React.useRef<HTMLButtonElement>(null);

  useClickAway(() => {
    if (isExpanded) {
      onCellClickAway('isExpanded');
    }
  }, ref);

  return (
    <StyledCellExpandWrapper
      $density={density}
      $horAlign={colDef?.align}
      $isEditMode={cellDef?.isEditMode}
      $toEdge={colDef?.toEdge}
      $verAlign={colDef?.verticalAlign}
      ref={ref}
    >
      {cellDef?.isExpanded ? (
        <EditorFloatingWrapper>
          <Panel>
            <Panel.Body style={{ textAlign: 'left' }}>
              <CellExpand
                value={
                  colDef.valueFormatter
                    ? colDef.valueFormatter(data, colDef.context)
                    : data
                }
                cellDef={cellDef}
                colDef={colDef}
                rowIndex={rowIndex}
                row={row}
              />
            </Panel.Body>
          </Panel>
        </EditorFloatingWrapper>
      ) : (
        <CellRenderer
          value={
            colDef.valueFormatter
              ? colDef.valueFormatter(data, colDef.context)
              : data
          }
          colDef={colDef}
          cellDef={cellDef}
          rowIndex={rowIndex}
          row={row}
          width={width}
          height={height}
        />
      )}
      <StyledCellMarker>
        <GIZoomExpandMaximizeWindow size={10} />
      </StyledCellMarker>
    </StyledCellExpandWrapper>
  );
};
