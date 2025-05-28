import * as React from 'react';

import type {
  IDragDropEventAttrs,
  IFieldEventAttrs,
} from '../../../../declarations';
import { GICheckThick } from '@devoinc/genesys-icons';
import { VFlex } from '../../../VFlex';
import { HFlex } from '../../../HFlex';
import {
  MenuItemContainer,
  MenuItemExpandableMark,
  MenuItemIcon,
  MenuItemShortCut,
} from './components';
import { StyledMenuItemLabel } from './StyledMenuItemLabel';
import { StyledHiddenInput } from '../../../../styled/';
import type { IMenuItem, IMenuItemBasic } from './declarations';

export interface MenuItemProps
  extends IMenuItemBasic,
    IMenuItem,
    IFieldEventAttrs,
    IDragDropEventAttrs {}

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
      isItem,
      label,
      name,
      onBlur,
      onChange,
      onFocus,
      prependContent,
      rel,
      role,
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
      role !== undefined
        ? role
        : selectionScheme === 'single'
          ? 'menuitemradio'
          : selectionScheme === 'multiple'
            ? 'menuitemcheckbox'
            : isLink
              ? null
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
        isItem={isItem}
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
              flex="1"
              justifyContent="center"
              childrenFitFullWidth
              spacing="0"
              minWidth="0"
            >
              <HFlex flex="1" alignItems="center" minWidth="0" spacing="cmp-xs">
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
