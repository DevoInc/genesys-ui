import * as React from 'react';

// declarations
import {
  ButtonAttrProps,
  FieldEventAttrProps,
  FocusEventAttrProps,
  InputAttrProps,
  SelectionScheme,
} from '../../declarations';

// styled
import { StyledChipIcon, StyledChipLabel } from './styled';
import { StyledHiddenInput, StyledHiddenInputProps } from '../../styled/';
import { ChipContainer, ChipContainerProps } from './components';

export interface ChipProps
  extends ChipContainerProps,
    Pick<ButtonAttrProps, 'name'>,
    FocusEventAttrProps,
    FieldEventAttrProps,
    Pick<InputAttrProps, 'value'>,
    Omit<StyledHiddenInputProps, 'checked' | 'defaultChecked' | 'disabled'> {
  children: React.ReactNode;
  /** It's equivalent to the native defaultChecked prop, and it has to be used only in uncontrolled mode.*/
  defaultSelected?: boolean;
  /** The icon name-id to be rendered at the left of the content.*/
  icon?: string;
  /** If the icon is rendered with bold style.*/
  hasBoldIcon?: boolean;
  /** The icon when the Chip is selected. It doesn't work in uncontrolled mode. */
  iconSelected?: string;
  /** If it's multiple the selection behavior is as a checkbox and if it's single as a radio */
  selectionScheme?: SelectionScheme;
}

export const InternalChip: React.FC<ChipProps> = ({
  'aria-label': ariaLabel,
  as,
  children,
  className,
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
  const iconValue = isSelected ? iconSelected : icon;
  return (
    <ChipContainer
      as={as}
      className={className}
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
      <StyledHiddenInput
        aria-label={ariaLabel || children?.toString()}
        checked={onChange ? isSelected : null}
        defaultChecked={defaultSelected}
        disabled={state === 'disabled'}
        id={id ? `chip-input-${id}` : null}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        selectionScheme={selectionScheme}
        value={value}
      />
      {iconValue && (
        <StyledChipIcon
          aria-hidden
          hasBoldIcon={hasBoldIcon}
          className={iconValue}
          size={size}
        />
      )}
      <StyledChipLabel>{children}</StyledChipLabel>
    </ChipContainer>
  );
};

export const Chip = InternalChip as typeof InternalChip & {
  Container: typeof ChipContainer;
};

Chip.Container = ChipContainer;
