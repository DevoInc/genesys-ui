import * as React from 'react';

import type { IDataAttrs } from '../../declarations';
import type { TChipIcon } from './declarations';
import {
  ChipContainer,
  type ChipContainerProps,
  ChipHiddenInput,
  type ChipHiddenInputProps,
  ChipIcon,
  ChipRemoveButton,
} from './components';

import {
  ChipContent,
  type ChipContentProps,
} from './components/ChipContent/ChipContent';
import { CHIP_ICON_SIZE_MAP } from './constants';

export interface ChipProps
  extends IDataAttrs,
    Omit<ChipContainerProps, 'children'>,
    Pick<ChipContentProps, 'children'>,
    ChipHiddenInputProps {
  /** The icon name-id to be rendered at the left of the content.*/
  icon?: TChipIcon;
  /** If the icon is rendered with bold style.*/
  hasBoldIcon?: boolean;
  /** The icon when the Chip is selected. It doesn't work in uncontrolled mode. */
  iconSelected?: React.ReactNode;
  /** The function called when the Chip is removable, and the remove icon button is clicked. */
  onRemove?: () => void;
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
  onRemove,
  removable,
  role,
  selectionScheme = 'multiple',
  size = 'md',
  sortable,
  state,
  style,
  tooltip,
  value,
  ...restDataProps
}) => {
  const isSelected = state === 'selected';
  const evalIcon = isSelected ? iconSelected : icon;
  return (
    <Chip._Container
      {...restDataProps}
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
      removable={removable}
      role={role}
      size={size}
      sortable={sortable}
      state={state}
      style={style}
      tooltip={tooltip}
    >
      <Chip._HiddenInput
        aria-label={ariaLabel || String(children)}
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
      {icon && (
        <Chip._Icon strong={hasBoldIcon} size={CHIP_ICON_SIZE_MAP[size]}>
          {evalIcon}
        </Chip._Icon>
      )}
      <Chip._Content>{children}</Chip._Content>
      {removable && <Chip._RemoveButton size={size} onClick={onRemove} />}
    </Chip._Container>
  );
};

export const Chip = InternalChip as typeof InternalChip & {
  _Container: typeof ChipContainer;
  _Content: typeof ChipContent;
  _HiddenInput: typeof ChipHiddenInput;
  _Icon: typeof ChipIcon;
  _RemoveButton: typeof ChipRemoveButton;
};

Chip._Container = ChipContainer;
Chip._Content = ChipContent;
Chip._HiddenInput = ChipHiddenInput;
Chip._Icon = ChipIcon;
Chip._RemoveButton = ChipRemoveButton;

InternalChip.displayName = 'Chip';
Chip._Container.displayName = 'Chip._Container';
Chip._Content.displayName = 'Chip._Content';
Chip._HiddenInput.displayName = 'Chip._HiddenInput';
Chip._Icon.displayName = 'Chip._Icon';
Chip._RemoveButton.displayName = 'Chip._RemoveButton';
