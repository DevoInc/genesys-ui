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
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../declarations';

// styled
import {
  StyledChip,
  StyledChipIcon,
  StyledChipLabel,
  StyledChipProps,
} from '../styled';
import { StyledHiddenInput, StyledHiddenInputProps } from '../../../styled/';

export interface ChipContainerProps
  extends GlobalAttrProps,
    GlobalAriaProps,
    StyledPolymorphicProps,
    StyledOverloadCssProps,
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

export const ChipContainer: React.FC<ChipContainerProps> = ({
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
  styles,
  tooltip,
  value,
  ...restStyledProps
}) => {
  const isSelected = state === 'selected';
  const iconValue = isSelected ? iconSelected : icon;
  return (
    <StyledChip
      {...restStyledProps}
      css={styles}
      id={id}
      selectionScheme={selectionScheme}
      size={size}
      state={state}
      title={tooltip}
    >
      {children}
    </StyledChip>
  );
};
