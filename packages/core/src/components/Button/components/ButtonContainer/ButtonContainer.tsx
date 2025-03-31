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
import { Resolve } from '../../../../typeFunctions';

export interface ButtonContainerProps
  extends IDataAttrs,
    IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs,
    Omit<ITriggerAriaAttrs, 'aria-selected'>,
    IFocusEventAttrs,
    IMouseEventAttrs,
    ITriggerEventAttrs,
    ILinkAttrs,
    Omit<IButtonAttrs, 'disabled' | 'name'>,
    IButtonContainer {
  /** Main content of the button */
  children?: React.ReactNode;
}

export const ButtonContainer = React.forwardRef<
  HTMLButtonElement,
  Resolve<ButtonContainerProps>
>(
  (
    {
      'aria-expanded': ariaExpanded,
      'aria-label': ariaLabel,
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
      ...restNativeProps
    },
    ref,
  ) => (
    <StyledButtonContainer
      {...restNativeProps}
      aria-expanded={state === 'expanded' || ariaExpanded}
      aria-label={tooltip || ariaLabel}
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
  ),
);
