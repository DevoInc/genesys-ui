import * as React from 'react';

// constants
import {
  BUTTON_BADGE_SIZE_MAP,
  BUTTON_LOADER_COLOR_SCHEME_MAP,
} from './constants';

// declarations
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
  TUIColorScheme,
} from '../../declarations';
import type { TButtonIconPosition } from './declarations';

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
  type ButtonContainerProps,
} from './components/ButtonContainer';
import { Resolve } from '../../typeFunctions';

export interface ButtonProps
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
    Omit<IButtonAttrs, 'disabled'>,
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
  iconPosition?: TButtonIconPosition;
}

export const InternalButton = React.forwardRef<
  HTMLButtonElement,
  Resolve<ButtonProps>
>(
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
      style,
      tooltip,
      type,
      value,
      ...restNativeProps
    },
    ref,
  ) => {
    const defIconPosition: TButtonIconPosition =
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
        style={style}
        tooltip={tooltip}
        type={type || (selectionScheme ? null : 'button')}
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
                <ButtonIcon strong={hasBoldIcon} size={size}>
                  {icon}
                </ButtonIcon>
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
              colorScheme === 'accent-high' ||
              colorScheme === 'accent' ||
              colorScheme === 'quiet'
                ? 'neutral'
                : (colorScheme as TUIColorScheme)
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
Button._Addon.displayName = 'Button._Addon';
Button._Badge.displayName = 'Button._Badge';
Button._Container.displayName = 'Button._Container';
Button._DropdownIcon.displayName = 'Button._DropdownIcon';
Button._Icon.displayName = 'Button._Icon';
Button._Label.displayName = 'Button._Label';
Button._Loader.displayName = 'Button._Loader';
Button._Selection.displayName = 'Button._Selection';
