import * as React from 'react';

// declarations
import type {
  IContainerEventAttrs,
  IDragDropEventAttrs,
  IMouseEventAttrs,
} from '../../../declarations/htmlEventAttrs';
import type { IGlobalAttrs } from '../../../declarations/htmlAttrs';
import type {
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../declarations/styled';
import type { TChipIcon } from '../declarations';

// styled
import { StyledChip, type StyledChipProps } from '../styled';
import { ChipContext } from '../context';

export interface ChipContainerProps
  extends IGlobalAttrs,
    IStyledPolymorphic,
    IStyledOverloadCss,
    IMouseEventAttrs,
    IDragDropEventAttrs,
    Omit<IContainerEventAttrs, 'onClick'>,
    StyledChipProps {
  icon?: TChipIcon;
  children: React.ReactNode;
}

export const ChipContainer: React.FC<ChipContainerProps> = ({
  as,
  children,
  icon,
  id,
  onClick,
  onContextMenu,
  onCopy,
  onCut,
  onDoubleClick,
  onDrag,
  onDragEnd,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDragStart,
  onDrop,
  onKeyDown,
  onKeyUp,
  onMouseDown,
  onMouseLeave,
  onMouseMove,
  onMouseOut,
  onMouseOver,
  onMouseUp,
  onPaste,
  onScroll,
  onWheel,
  role,
  size = 'md',
  sortable,
  state,
  styles,
  tooltip,
  ...restDataProps
}) => {
  return (
    <StyledChip
      {...restDataProps}
      as={as}
      css={styles}
      id={id}
      onClick={onClick}
      onContextMenu={onContextMenu}
      onCopy={onCopy}
      onCut={onCut}
      onDoubleClick={onDoubleClick}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDragStart={onDragStart}
      onDrop={onDrop}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      onMouseUp={onMouseUp}
      onPaste={onPaste}
      onScroll={onScroll}
      onWheel={onWheel}
      role={role}
      size={size}
      sortable={sortable}
      state={state}
      title={tooltip}
    >
      <ChipContext.Provider value={{ size, icon }}>
        {children}
      </ChipContext.Provider>
    </StyledChip>
  );
};
