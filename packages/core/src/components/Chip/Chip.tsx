import * as React from 'react';

// declarations
import {
  ButtonAttrProps,
  ContainerEventAttrProps,
  DragDropEventAttrProps,
  FieldEventAttrProps,
  FocusEventAttrProps,
  GlobalAriaProps,
  GlobalAttrProps,
  InputAttrProps,
  MouseEventAttrProps,
  StyledPolymorphicProps,
} from '../../declarations';

// styled
import {
  StyledChip,
  StyledChipIcon,
  StyledChipLabel,
  StyledChipProps,
} from './styled';
import { StyledHiddenInput, StyledHiddenInputProps } from '../../styled/';

export interface ChipProps
  extends GlobalAttrProps,
    GlobalAriaProps,
    StyledPolymorphicProps,
    Pick<ButtonAttrProps, 'name'>,
    FocusEventAttrProps,
    MouseEventAttrProps,
    DragDropEventAttrProps,
    FieldEventAttrProps,
    ContainerEventAttrProps,
    Pick<InputAttrProps, 'value'>,
    Omit<StyledHiddenInputProps, 'checked' | 'defaultChecked' | 'disabled'>,
    StyledChipProps {
  children: React.ReactNode;
  /** It's equivalent to the native defaultChecked prop, and it has to be used only in uncontrolled mode.*/
  defaultSelected?: boolean;
  /** The icon name-id to be rendered at the left of the content.*/
  icon?: string;
  /** If the icon is rendered with bold style.*/
  hasBoldIcon?: boolean;
  /** The icon when the Chip is selected. It doesn't work in uncontrolled mode. */
  iconSelected?: string;
}

export const Chip: React.FC<ChipProps> = ({
  'aria-label': ariaLabel,
  children,
  defaultSelected = false,
  hasBoldIcon = false,
  icon,
  iconSelected,
  id,
  name,
  onBlur,
  onChange,
  onFocus,
  selectionScheme = 'multiple',
  size = 'md',
  state,
  value,
  ...restStyledProps
}) => {
  const isSelected = state === 'selected';
  const iconValue = isSelected ? iconSelected : icon;
  return (
    <StyledChip
      {...restStyledProps}
      id={id}
      selectionScheme={selectionScheme}
      size={size}
      state={state}
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
    </StyledChip>
  );
};
