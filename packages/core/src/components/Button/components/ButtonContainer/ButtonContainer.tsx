import * as React from 'react';

import {
  ButtonAttrProps,
  FocusEventAttrProps,
  GlobalAriaProps,
  GlobalAttrProps,
  LinkAttrProps,
  MouseEventAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
  TriggerAriaProps,
  TriggerEventAttrProps,
} from '../../../../declarations';

import {
  StyledButtonContainer,
  StyledButtonContainerProps,
} from './StyledButtonContainer';

export interface ButtonContainerProps
  extends StyledPolymorphicProps,
    StyledOverloadCssProps,
    GlobalAttrProps,
    GlobalAriaProps,
    TriggerAriaProps,
    FocusEventAttrProps,
    MouseEventAttrProps,
    TriggerEventAttrProps,
    LinkAttrProps,
    Omit<ButtonAttrProps, 'disabled' | 'name'>,
    StyledButtonContainerProps {
  /** Main content of the button */
  children?: React.ReactNode;
}

export const ButtonContainer = React.forwardRef<
  HTMLElement,
  ButtonContainerProps
>(
  (
    {
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
      styles,
      tooltip,
      ...restNativeProps
    },
    ref,
  ) => {
    return (
      <StyledButtonContainer
        {...restNativeProps}
        aria-expanded={state === 'expanded' || ariaExpanded}
        aria-label={tooltip || ariaLabel}
        aria-selected={state === 'selected' || ariaSelected}
        as={as || (selectionScheme && 'label') || (href && 'a')}
        colorScheme={colorScheme}
        data-squared={squared}
        disabled={state === 'disabled' || state === 'loading'}
        squared={squared}
        href={href}
        icon={icon}
        id={id}
        circular={circular}
        hasDropdown={hasDropdown}
        wide={wide}
        onFocus={selectionScheme ? null : onFocus}
        onBlur={selectionScheme ? null : onBlur}
        ref={ref}
        selectionScheme={selectionScheme}
        size={size}
        state={state}
        css={styles}
        title={tooltip}
      >
        {children}
      </StyledButtonContainer>
    );
  },
);

ButtonContainer.displayName = 'ButtonContainer';
