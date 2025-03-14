import * as React from 'react';

import type {
  IFieldEventAttrs,
  TSelectionScheme,
} from '../../../../declarations';
import { GICheckThick } from '@devoinc/genesys-icons';
import { VFlex } from '../../../VFlex';
import { HFlex } from '../../../HFlex';
import {
  MenuItemContainer,
  type MenuItemContainerProps,
  MenuItemExpandableMark,
  MenuItemIcon,
  MenuItemShortCut,
} from './components';
import { StyledMenuItemLabel } from './StyledMenuItemLabel';
import { StyledHiddenInput } from '../../../../styled/';

export interface MenuItemProps
  extends Omit<MenuItemContainerProps, 'children' | 'isItem'>,
    IFieldEventAttrs {
  /** Custom content to be rendered at the end all to the right of the item. */
  appendContent?: React.ReactNode;
  /** Custom content to be rendered at the bottom of the item. */
  bottomContent?: React.ReactNode;
  /** To get custom contents without using any pre-defined content prop. */
  children?: React.ReactNode;
  /** If the menu item is expandable and can show/hide other sub-menus, showing an expand icon at the right. */
  expandable?: boolean;
  /** The visual content to be rendered at the beginning of the item (usually and icon). */
  icon?: React.ReactNode;
  /** The main text block of the item. */
  label?: React.ReactNode;
  /** Custom content to be rendered at the beginning just after the Icon block of the item. */
  prependContent?: React.ReactNode;
  /** If it's multiple the item behaves as a checkbox and if it's single as a radio */
  selectionScheme?: TSelectionScheme;
  /** Shortcut text for the item. */
  shortcut?: string;
  /** Component used as sub-menu child of the `<li>` element. */
  subMenu?: React.ReactNode;
}

export const InternalMenuItem = React.forwardRef<
  HTMLButtonElement,
  MenuItemProps
>(
  (
    {
      appendContent,
      'aria-label': ariaLabel,
      as,
      bottomContent,
      children,
      download,
      expandable,
      href,
      hasExtraLeftSpace,
      icon,
      id,
      label,
      name,
      onBlur,
      onChange,
      onFocus,
      prependContent,
      rel,
      selectionScheme,
      shortcut,
      state = 'enabled',
      tabIndex,
      target,
      tooltip,
      value,
      ...restNativeProps
    },
    ref,
  ) => {
    const isLink = href || target || rel || download;
    const isDisabled = state === 'disabled';
    const isExpanded = state === 'expanded';
    const isSelectable = Boolean(selectionScheme);
    const isSelected = state === 'selected';
    const isReadonly = state === 'readonly';
    const roleEval =
      selectionScheme === 'single'
        ? 'menuitemradio'
        : selectionScheme === 'multiple'
          ? 'menuitemcheckbox'
          : 'menuitem';
    const getHasExtraLeftSpace = () => {
      if (hasExtraLeftSpace === false) return false;
      if (Boolean(children) && hasExtraLeftSpace) return true;
      return (hasExtraLeftSpace || Boolean(icon) || isSelectable) && !children;
    };
    const isLabelString = typeof label === 'string';
    const evalAs =
      as ||
      (isReadonly ? 'div' : isLink ? 'a' : isSelectable ? 'label' : 'button');

    return (
      <MenuItem._Container
        {...restNativeProps}
        aria-keyshortcuts={shortcut}
        aria-expanded={isExpanded || null}
        aria-label={ariaLabel || (isLabelString ? label : null)}
        aria-checked={(Boolean(selectionScheme) && isSelected) || null}
        as={evalAs}
        disabled={!isLink && !isSelectable && isDisabled}
        download={download}
        hasExtraLeftSpace={getHasExtraLeftSpace()}
        href={isDisabled ? null : href}
        id={id}
        name={isSelectable ? null : name}
        ref={ref}
        rel={rel}
        role={roleEval}
        state={state}
        tooltip={tooltip}
        tabIndex={tabIndex}
        target={target}
        value={isSelectable ? null : value}
      >
        {isSelectable && (
          <MenuItem._HiddenInput
            aria-label={ariaLabel || (isLabelString ? label : null)}
            checked={onChange ? isSelected : null}
            disabled={isDisabled}
            id={id ? `menu-item-input-${id}` : null}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            onFocus={onFocus}
            type={selectionScheme === 'single' ? 'radio' : 'checkbox'}
            value={value}
          />
        )}
        {children || (
          <>
            <VFlex
              as="span"
              flex="1"
              justifyContent="center"
              childrenFitFullWidth
              spacing="0"
              minWidth="0"
            >
              <HFlex
                as="span"
                flex="1"
                alignItems="center"
                minWidth="0"
                spacing="cmp-xs"
              >
                {(icon || isSelected) && getHasExtraLeftSpace() && (
                  <MenuItem._Icon>
                    {isSelected ? <GICheckThick /> : icon}
                  </MenuItem._Icon>
                )}
                {prependContent}
                <MenuItem._Label>{label}</MenuItem._Label>
                {shortcut && (
                  <MenuItem._ShortCut>{shortcut}</MenuItem._ShortCut>
                )}
                {appendContent}
              </HFlex>
              {bottomContent}
            </VFlex>
            {expandable && <MenuItem._ExpandableMark />}
          </>
        )}
      </MenuItem._Container>
    );
  },
);

export const MenuItem = InternalMenuItem as typeof InternalMenuItem & {
  _Container: typeof MenuItemContainer;
  _ExpandableMark: typeof MenuItemExpandableMark;
  _HiddenInput: typeof StyledHiddenInput;
  _Icon: typeof MenuItemIcon;
  _Label: typeof StyledMenuItemLabel;
  _ShortCut: typeof MenuItemShortCut;
};

MenuItem._Container = MenuItemContainer;
MenuItem._ExpandableMark = MenuItemExpandableMark;
MenuItem._HiddenInput = StyledHiddenInput;
MenuItem._Icon = MenuItemIcon;
MenuItem._Label = StyledMenuItemLabel;
MenuItem._ShortCut = MenuItemShortCut;

InternalMenuItem.displayName = 'MenuItem';
