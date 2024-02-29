import * as React from 'react';

// constants
import {
  BUTTON_BADGE_SIZE_MAP,
  BUTTON_LOADER_COLOR_SCHEME_MAP,
} from './constants';

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
  ButtonDropdownIcon,
  ButtonIcon,
  ButtonLabel,
  ButtonLoader,
  ButtonSelection,
} from './components';

import {
  ButtonContainer,
  ButtonContainerProps,
} from './components/ButtonContainer';

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
    ButtonContainerProps {
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

export const InternalButton = React.forwardRef<HTMLElement, ButtonProps>(
  (
    {
      'aria-label': ariaLabel,
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
      type = 'button',
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
      <ButtonContainer
        {...restNativeProps}
        aria-label={ariaLabel}
        as={as}
        colorScheme={colorScheme}
        squared={squared}
        href={href}
        icon={icon}
        id={id}
        circular={circular}
        hasDropdown={hasDropdown}
        wide={wide}
        ref={ref}
        selectionScheme={selectionScheme}
        size={size}
        state={state}
        styles={styles}
        tooltip={tooltip}
        type={type}
      >
        {selectionScheme && (
          <ButtonSelection
            id={id}
            disabled={state === 'disabled'}
            checked={onChange ? isSelected : null}
            label={ariaLabel || tooltip || String(children)}
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
            id={id}
            position={defIconPosition}
            size={size}
          >
            {isLoading ? (
              <ButtonLoader
                colorScheme={BUTTON_LOADER_COLOR_SCHEME_MAP[colorScheme]}
                size={size}
                state={state}
              />
            ) : (
              icon && (
                <ButtonIcon hasBoldIcon={hasBoldIcon} icon={icon} size={size} />
              )
            )}
          </ButtonAddon>
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
            hasSpace={addonHasSpace}
            isDropdown
            size={size}
            position="right"
          >
            <ButtonDropdownIcon size={size} state={state} />
          </ButtonAddon>
        )}
      </ButtonContainer>
    );
  },
);

export const Button = InternalButton as typeof InternalButton & {
  _Addon: typeof ButtonAddon;
  _Badge: typeof ButtonBadge;
  _Container: typeof ButtonContainer;
  _DropdownIcon: typeof ButtonDropdownIcon;
  _Icon: typeof ButtonIcon;
  _Label: typeof ButtonLabel;
  _Loader: typeof ButtonLoader;
  _Selection: typeof ButtonSelection;
};

Button._Addon = ButtonAddon;
Button._Badge = ButtonBadge;
Button._Container = ButtonContainer;
Button._DropdownIcon = ButtonDropdownIcon;
Button._Icon = ButtonIcon;
Button._Label = ButtonLabel;
Button._Loader = ButtonLoader;
Button._Selection = ButtonSelection;

InternalButton.displayName = 'Button';
