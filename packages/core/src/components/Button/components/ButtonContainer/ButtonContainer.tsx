import * as React from 'react';

import type {
  IButtonAttrs,
  IDataAttrs,
  IFocusEventAttrs,
  IGlobalAriaAttrs,
  IGlobalAttrs,
  ILinkAttrs,
  IMouseEventAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
  ITriggerAriaAttrs,
  ITriggerEventAttrs,
} from '../../../../declarations';

import { StyledButtonContainer } from './StyledButtonContainer';
import type { IButtonContainer } from './declarations';

export interface ButtonContainerProps
  extends IDataAttrs,
    IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs,
    ITriggerAriaAttrs,
    IFocusEventAttrs,
    IMouseEventAttrs,
    ITriggerEventAttrs,
    ILinkAttrs,
    Omit<IButtonAttrs, 'disabled' | 'name'>,
    IButtonContainer {
  /** Main content of the button */
  children?: React.ReactNode;
  ref?: React.Ref<HTMLButtonElement>;
}

export const ButtonContainer: React.FC<ButtonContainerProps> = ({
  'aria-expanded': ariaExpanded,
  'aria-label': ariaLabel,
  'aria-selected': ariaSelected,
  as,
  children,
  colorScheme = 'neutral',
  hasDropdown,
  href,
  icon,
  id,
  circular,
  squared,
  wide,
  onBlur,
  onFocus,
  selectionScheme,
  size = 'md',
  state = 'enabled',
  style,
  tooltip,
  ref,
  ...restNativeProps
}) => (
  <StyledButtonContainer
    {...restNativeProps}
    aria-expanded={state === 'expanded' || ariaExpanded}
    aria-label={tooltip || ariaLabel}
    aria-selected={state === 'selected' || ariaSelected}
    as={as || (selectionScheme && 'label') || (href && 'a')}
    $colorScheme={colorScheme}
    data-squared={squared}
    disabled={state === 'disabled' || state === 'loading'}
    $squared={squared}
    href={href}
    $icon={icon}
    id={id}
    $circular={circular}
    $hasDropdown={hasDropdown}
    $wide={wide}
    onFocus={selectionScheme ? null : onFocus}
    onBlur={selectionScheme ? null : onBlur}
    ref={ref}
    $selectionScheme={selectionScheme}
    $size={size}
    $state={state}
    css={style}
    title={tooltip}
  >
    {children}
  </StyledButtonContainer>
);
