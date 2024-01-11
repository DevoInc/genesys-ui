import * as React from 'react';
import { useTheme } from 'styled-components';

// constants
import { Icon } from '../../../Icon';
import { menuItemSizeConfig } from './constants';

// declarations
import {
  ButtonAttrProps,
  FieldEventAttrProps,
  FocusEventAttrProps,
  GlobalAriaProps,
  GlobalAttrProps,
  LayoutAttrProps,
  LinkAttrProps,
  MouseEventAttrProps,
  NavigationAriaProps,
  SelectionScheme,
  StyledPolymorphicProps,
  TriggerAriaProps,
} from '../../../../declarations';

// components
import { Flex } from '../../../Flex';
import { VFlex } from '../../../VFlex';

// styled
import {
  StyledMenuItem,
  StyledMenuItemInner,
  StyledMenuItemLabel,
  StyledMenuItemMarker,
  StyledMenuItemInnerProps,
} from './styled';
import { StyledHiddenInput } from '../../../../styled/';
import { Typography } from '../../../Typography';
import { HFlex } from '../../../HFlex';

export interface MenuItemProps
  extends StyledPolymorphicProps,
    Pick<GlobalAttrProps, 'id' | 'tooltip'>,
    GlobalAriaProps,
    Pick<TriggerAriaProps, 'aria-controls' | 'aria-expanded' | 'aria-haspopup'>,
    LayoutAttrProps,
    LinkAttrProps,
    FieldEventAttrProps,
    FocusEventAttrProps,
    MouseEventAttrProps,
    NavigationAriaProps,
    Pick<ButtonAttrProps, 'name' | 'value'>,
    StyledMenuItemInnerProps {
  appendContent?: React.ReactNode;
  bottomContent?: React.ReactNode;
  children?: React.ReactNode;
  expandable?: boolean;
  icon?: React.ReactNode;
  label?: React.ReactNode;
  prependContent?: React.ReactNode;
  //ref: React.Ref<HTMLElement>;
  selectionScheme?: SelectionScheme;
  /** Shortcut text for the item. */
  shortcut?: string;
  /** Component used as sub-menu child of the <li> element. */
  subMenu?: React.ReactNode;
}

export const MenuItem = React.forwardRef<HTMLButtonElement, MenuItemProps>(
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
      subMenu,
      target,
      tooltip,
      value,
      ...restNativeProps
    },
    ref,
  ) => {
    const theme = useTheme();
    const isLink = href || target || rel || download;
    const isDisabled = state === 'disabled';
    const isExpanded = state === 'expanded';
    const isSelectable = Boolean(selectionScheme);
    const isSelected = state === 'selected';
    const isReadonly = state === 'readonly';
    const iconSize = menuItemSizeConfig(theme).iconSize;
    const roleEval =
      selectionScheme === 'single'
        ? 'menuitemradio'
        : selectionScheme === 'multiple'
          ? 'menuitemcheckbox'
          : 'menuitem';
    const getHasExtraLeftSpace = () => {
      if (hasExtraLeftSpace === false) return false;
      if (Boolean(children) && hasExtraLeftSpace) return true;
      return (
        (hasExtraLeftSpace || Boolean(icon) || isSelectable) &&
        !children
      );
    };
    const isLabelString = typeof label === 'string';
    const isFontIcon = typeof icon === 'string';
    const evalAs = isReadonly
      ? 'div'
      : isLink
        ? 'a'
        : isSelectable
          ? 'label'
          : 'button';

    return (
      <StyledMenuItem as={as} role="presentation">
        <StyledMenuItemInner
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
          title={tooltip}
          tabIndex={tabIndex}
          target={target}
          value={isSelectable ? null : value}
        >
          {isSelectable && (
            <StyledHiddenInput
              aria-label={ariaLabel || (isLabelString ? label : null)}
              checked={onChange ? isSelected : null}
              disabled={isDisabled}
              id={id ? `menu-item-input-${id}` : null}
              name={name}
              onBlur={onBlur}
              onChange={onChange}
              onFocus={onFocus}
              selectionScheme={selectionScheme}
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
                    <StyledMenuItemMarker>
                      <Icon
                        iconId={
                          isSelected
                            ? 'gi-check_thick'
                            : isFontIcon
                              ? icon
                              : null
                        }
                        size={iconSize}
                        role={'img'}
                        tooltip={ariaLabel || (isLabelString ? label : null)}
                      >
                        {!isSelected && !isFontIcon ? icon : null}
                      </Icon>
                    </StyledMenuItemMarker>
                  )}
                  {prependContent}
                  <StyledMenuItemLabel>{label}</StyledMenuItemLabel>
                  {shortcut && (
                    <Flex marginLeft="auto" alignItems="center" as="span">
                      <Typography.Caption colorScheme="weak">
                        {shortcut}
                      </Typography.Caption>
                    </Flex>
                  )}
                  {appendContent}
                </HFlex>
                {bottomContent}
              </VFlex>
              {expandable && (
                <Flex as="span" flex="0" marginLeft="auto" paddingLeft="cmp-xs">
                  <Icon size="xxs" iconId="gi-angle_right" />
                </Flex>
              )}
            </>
          )}
        </StyledMenuItemInner>
        {subMenu}
      </StyledMenuItem>
    );
  },
);

MenuItem.displayName = 'MenuItem';
