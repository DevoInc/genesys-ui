import * as React from 'react';

import type { IDragDropEventAttrs } from '../../../../declarations';
import type { IMenuItem, IMenuItemBasic } from './declarations';
import { useMenuItemPadding } from './useMenuItemPadding';
import { GICheckThick } from '@devoinc/genesys-icons';
import { VFlex } from '../../../VFlex';
import { HFlex } from '../../../HFlex';
import {
  MenuItemExpandableMark,
  MenuItemIcon,
  MenuItemInner,
  MenuItemInteractiveWrapper,
  MenuItemShortCut,
  MenuItemWrapper,
} from './components';
import { StyledMenuItemLabel } from './StyledMenuItemLabel';

export interface MenuItemProps
  extends IMenuItemBasic,
    IMenuItem,
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
      interactiveContent,
      isItem,
      label,
      linkStyled,
      name,
      onBlur,
      onFocus,
      prependContent,
      quiet,
      rel,
      role,
      selectionScheme,
      shortcut,
      state = 'enabled',
      style,
      tabIndex,
      target,
      tooltip,
      unlimitedHeight,
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
    const evalAs = as || (isReadonly ? 'div' : isLink ? 'a' : 'button');

    const interactiveRef = React.useRef(null);
    const innerRef = React.useRef<HTMLButtonElement>(null);
    React.useImperativeHandle(ref, () => innerRef.current!);

    useMenuItemPadding(interactiveRef, innerRef);

    return (
      <MenuItem._Wrapper
        as={isItem ? 'li' : undefined}
        state={state}
        quiet={quiet}
      >
        <MenuItem._Inner
          {...restNativeProps}
          ref={innerRef}
          aria-keyshortcuts={shortcut}
          aria-expanded={isExpanded || null}
          aria-label={ariaLabel || (isLabelString ? label : null)}
          aria-checked={
            (isSelectable && isSelected) || (isSelectable ? false : null)
          }
          as={evalAs}
          disabled={!isLink && !isSelectable && isDisabled}
          download={download}
          hasExtraLeftSpace={getHasExtraLeftSpace()}
          href={isDisabled ? null : href}
          id={id}
          rel={rel}
          role={roleEval}
          tabIndex={tabIndex}
          target={target}
          value={value}
          name={name}
          onBlur={onBlur}
          onFocus={onFocus}
          linkStyled={linkStyled}
          unlimitedHeight={unlimitedHeight}
          state={state}
          tooltip={tooltip}
          style={style}
        >
          {children || (
            <>
              <VFlex
                flex="1"
                justifyContent="center"
                childrenFitFullWidth
                spacing="0"
                minWidth="0"
              >
                <HFlex
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
        </MenuItem._Inner>
        {interactiveContent && (
          <MenuItemInteractiveWrapper ref={interactiveRef}>
            {interactiveContent}
          </MenuItemInteractiveWrapper>
        )}
      </MenuItem._Wrapper>
    );
  },
);

export const MenuItem = InternalMenuItem as typeof InternalMenuItem & {
  _Wrapper: typeof MenuItemWrapper;
  _Inner: typeof MenuItemInner;
  _InteractiveWrapper: typeof MenuItemInteractiveWrapper;
  _ExpandableMark: typeof MenuItemExpandableMark;
  _Icon: typeof MenuItemIcon;
  _Label: typeof StyledMenuItemLabel;
  _ShortCut: typeof MenuItemShortCut;
};

MenuItem._Wrapper = MenuItemWrapper;
MenuItem._Inner = MenuItemInner;
MenuItem._InteractiveWrapper = MenuItemInteractiveWrapper;
MenuItem._ExpandableMark = MenuItemExpandableMark;
MenuItem._Icon = MenuItemIcon;
MenuItem._Label = StyledMenuItemLabel;
MenuItem._ShortCut = MenuItemShortCut;

InternalMenuItem.displayName = 'Menu.Item';
MenuItem._Wrapper.displayName = 'Menu.Item._Wrapper';
MenuItem._Inner.displayName = 'Menu.Item._Inner';
MenuItem._InteractiveWrapper.displayName = 'Menu.Item._InteractiveWrapper';
MenuItem._ExpandableMark['displayName'] = 'Menu.Item._ExpandableMark';
MenuItem._Icon.displayName = 'Menu.Item._Icon';
MenuItem._Label.displayName = 'Menu.Item._Label';
MenuItem._ShortCut.displayName = 'Menu.Item._ShortCut';
