import * as React from 'react';

// declarations
import {
  ContainerEventAttrProps,
  DragDropEventAttrProps,
  GlobalAttrProps,
  MouseEventAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../declarations';

// styled
import { StyledChip, StyledChipProps } from '../styled';

export interface ChipContainerProps
  extends GlobalAttrProps,
    StyledPolymorphicProps,
    StyledOverloadCssProps,
    MouseEventAttrProps,
    DragDropEventAttrProps,
    Omit<ContainerEventAttrProps, 'onClick'>,
    StyledChipProps {
  children: React.ReactNode;
}

export const ChipContainer: React.FC<ChipContainerProps> = ({
  as,
  children,
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
}) => {
  return (
    <StyledChip
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
      {children}
    </StyledChip>
  );
};
