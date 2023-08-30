import * as React from 'react';

// constants
import { BUTTON_BADGE_SIZE_MAP, BUTTON_LOADING_ICON_NAME } from './constants';

// declarations
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
  UIColorScheme,
} from '../../declarations';
import { ButtonIconPosition } from './declarations';

// components
import {
  ButtonAddon,
  ButtonBadge,
  ButtonLabel,
  ButtonSelection,
} from './components';

// styled
import { StyledButton, StyledButtonProps } from './StyledButton';

export interface ButtonProps
  extends StyledPolymorphicProps,
    StyledOverloadCssProps,
    GlobalAttrProps,
    GlobalAriaProps,
    TriggerAriaProps,
    FocusEventAttrProps,
    MouseEventAttrProps,
    TriggerEventAttrProps,
    LinkAttrProps,
    Omit<ButtonAttrProps, 'disabled'>,
    StyledButtonProps {
  /** Content of the badge */
  badgeText?: string;
  /** Main content of the button */
  children?: React.ReactNode;
  /** If the button has a badge */
  hasBadge?: boolean;
  /** Icon needs a higher font-weight */
  hasBoldIcon?: boolean;
  /** Icon Position */
  iconPosition?: ButtonIconPosition;
}

export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  (
    {
      'aria-expanded': ariaExpanded,
      'aria-label': ariaLabel,
      'aria-selected': ariaSelected,
      as,
      badgeText,
      children,
      colorScheme = 'neutral',
      hasBadge,
      href,
      icon,
      iconPosition = 'left',
      id,
      circular,
      hasDropdown,
      hasBoldIcon,
      squared,
      wide,
      name,
      onBlur,
      onChange,
      onFocus,
      selectionScheme,
      size = 'md',
      state = 'enabled',
      styles,
      tooltip,
      value,
      ...restNativeProps
    },
    ref,
  ) => {
    const defIconPosition: ButtonIconPosition =
      squared && !hasDropdown ? null : iconPosition;
    const isLoading =
      state === 'loading' ||
      state === 'loading-success' ||
      state === 'loading-error';
    const isSelected = state === 'selected';
    const addonHasSpace =
      Boolean(!squared && iconPosition) ||
      Boolean(!squared && isLoading) ||
      Boolean(icon && squared && hasDropdown);
    return (
      <StyledButton
        {...restNativeProps}
        aria-expanded={state === 'expanded' || ariaExpanded}
        aria-label={tooltip || ariaLabel}
        aria-selected={isSelected || ariaSelected}
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
        {selectionScheme && (
          <ButtonSelection
            id={id}
            disabled={state === 'disabled'}
            checked={onChange ? isSelected : null}
            label={ariaLabel || tooltip || children?.toString()}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            onFocus={onFocus}
            selectionScheme={selectionScheme}
            value={value}
          />
        )}

        {(icon || isLoading) && (
          <ButtonAddon
            hasSpace={addonHasSpace}
            icon={
              state === 'loading-success' || state === 'loading-error'
                ? BUTTON_LOADING_ICON_NAME[state]
                : icon
            }
            id={id}
            hasBoldIcon={hasBoldIcon}
            isLoader={state === 'loading'}
            position={defIconPosition}
            size={size}
            state={state}
            colorScheme={colorScheme}
          />
        )}

        {children && squared ? (
          children
        ) : children ? (
          <ButtonLabel>{children}</ButtonLabel>
        ) : null}

        {hasBadge && (
          <ButtonBadge
            colorScheme={
              colorScheme === 'accent-high'
                ? 'primary'
                : colorScheme === 'accent'
                ? 'secondary'
                : colorScheme === 'quiet'
                ? 'neutral'
                : (colorScheme as UIColorScheme)
            }
            hasCircularParent={circular}
            id={id}
            size={BUTTON_BADGE_SIZE_MAP[size]}
            text={badgeText}
          />
        )}

        {hasDropdown && (
          <ButtonAddon
            colorScheme={colorScheme}
            hasSpace={addonHasSpace}
            isDropdown
            squared={squared}
            position={'right'}
            size={size}
            state={state}
          />
        )}
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';
