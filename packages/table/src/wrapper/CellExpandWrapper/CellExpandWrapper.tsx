import * as React from 'react';

import { GIZoomExpandMaximizeWindow } from '@devoinc/genesys-icons';
import { Panel } from '@devoinc/genesys-ui';

import { StyledCellMarker } from '../StyledCellMarker';
import { TableContext } from '../../context';
import type { TCellWrapper } from '../declarations';
import { EditorFloatingWrapper } from '../../editors/components';
import { StyledCellExpandWrapper } from './StyledCellExpandWrapper';

export const CellExpandWrapper: React.FC<TCellWrapper> = ({
  cellDef,
  colDef,
  data,
  row,
  rowIndex,
}) => {
  const { density } = React.useContext(TableContext);
  const CellRenderer = colDef.cellRenderer;
  return (
    <StyledCellExpandWrapper
      $density={density}
      $horAlign={colDef?.align}
      $isEditMode={cellDef?.isEditMode}
      $toEdge={colDef?.toEdge}
      $verAlign={colDef?.verticalAlign}
    >
      {cellDef?.isExpanded && (
        <EditorFloatingWrapper>
          <Panel>
            <Panel.Body>
              {String(
                colDef.valueFormatter
                  ? colDef.valueFormatter(data, colDef.context)
                  : data,
              )}
            </Panel.Body>
          </Panel>
        </EditorFloatingWrapper>
      )}
      <CellRenderer
        value={
          colDef.valueFormatter
            ? colDef.valueFormatter(data, colDef.context)
            : data
        }
        colDef={colDef}
        rowIndex={rowIndex}
        row={row}
      />
      <StyledCellMarker>
        <GIZoomExpandMaximizeWindow size={10} />
      </StyledCellMarker>
    </StyledCellExpandWrapper>
  );
};
