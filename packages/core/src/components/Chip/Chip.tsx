import * as React from 'react';

import {
  ChipContainer,
  ChipContainerProps,
  ChipHiddenInput,
  ChipHiddenInputProps,
  ChipIcon,
} from './components';

import { ChipContent, ChipContentProps } from './components/ChipContent';

export interface ChipProps
  extends Omit<ChipContainerProps, 'children'>,
    Pick<ChipContentProps, 'children'>,
    ChipHiddenInputProps {
  /** The icon name-id to be rendered at the left of the content.*/
  icon?: string;
  /** If the icon is rendered with bold style.*/
  hasBoldIcon?: boolean;
  /** The icon when the Chip is selected. It doesn't work in uncontrolled mode. */
  iconSelected?: string;
}

export const InternalChip: React.FC<ChipProps> = ({
  'aria-label': ariaLabel,
  as,
  children,
  defaultSelected = false,
  hasBoldIcon = false,
  icon,
  iconSelected,
  id,
  name,
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
  onBlur,
  onChange,
  onFocus,
  role,
  selectionScheme = 'multiple',
  size = 'md',
  sortable,
  state,
  styles,
  tooltip,
  value,
}) => {
  const isSelected = state === 'selected';
  const iconId = isSelected ? iconSelected : icon;
  return (
    <ChipContainer
      as={as}
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
      styles={styles}
      tooltip={tooltip}
    >
      <ChipHiddenInput
        aria-label={ariaLabel || children?.toString()}
        defaultSelected={defaultSelected}
        disabled={state === 'disabled'}
        id={id ? `chip-input-${id}` : null}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        selectionScheme={selectionScheme}
        state={state}
        value={value}
      />
      {iconId && <ChipIcon iconId={iconId} strong={hasBoldIcon} size={size} />}
      <ChipContent>{children}</ChipContent>
    </ChipContainer>
  );
};

export const Chip = InternalChip as typeof InternalChip & {
  Container: typeof ChipContainer;
  Content: typeof ChipContent;
  HiddenInput: typeof ChipHiddenInput;
  Icon: typeof ChipIcon;
};

Chip.Container = ChipContainer;
Chip.Content = ChipContent;
Chip.HiddenInput = ChipHiddenInput;
Chip.Icon = ChipIcon;
