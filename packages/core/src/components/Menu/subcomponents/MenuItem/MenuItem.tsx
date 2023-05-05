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

export interface MenuItemProps
  extends StyledPolymorphicProps,
    Pick<GlobalAttrProps, 'id' | 'title'>,
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
  icon?: string;
  label?: string;
  prependContent?: React.ReactNode;
  selectionScheme?: SelectionScheme;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  appendContent,
  'aria-label': ariaLabel,
  as,
  bottomContent,
  forwardedAs,
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
  state = 'enabled',
  tabIndex,
  target,
  value,
  ...restNativeProps
}) => {
  const theme = useTheme();
  const isLink = href || target || rel || download;
  const isDisabled = state === 'disabled';
  const isExpanded = state === 'expanded';
  const isSelectable = Boolean(selectionScheme);
  const isSelected = state === 'selected';
  const iconSize = menuItemSizeConfig(theme).iconSize;
  const roleEval = isLink
    ? null
    : selectionScheme === 'single'
    ? 'menuitemradio'
    : selectionScheme === 'multiple'
    ? 'menuitemcheckbox'
    : 'menuitem';
  return (
    <StyledMenuItem as={as} forwardedAs={forwardedAs}>
      <StyledMenuItemInner
        {...restNativeProps}
        aria-expanded={isExpanded || null}
        aria-label={label}
        aria-checked={(Boolean(selectionScheme) && isSelected) || null}
        as={isLink ? 'a' : isSelectable ? 'label' : 'button'}
        disabled={!isLink && !isSelectable && isDisabled}
        download={download}
        hasExtraLeftSpace={
          (hasExtraLeftSpace || Boolean(icon) || isSelectable) &&
          !Boolean(children)
        }
        href={isDisabled ? null : href}
        id={id}
        name={isSelectable ? null : name}
        rel={rel}
        role={roleEval}
        state={state}
        tabIndex={tabIndex}
        target={target}
        value={isSelectable ? null : value}
      >
        {isSelectable && (
          <StyledHiddenInput
            aria-label={ariaLabel || label}
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
            >
              <Flex as="span" flex="1" alignItems="center" minWidth="0">
                {(icon || isSelected) && (
                  <StyledMenuItemMarker>
                    <Icon
                      iconId={isSelected ? 'check_thick' : icon}
                      size={iconSize}
                    />
                  </StyledMenuItemMarker>
                )}
                {prependContent}
                <StyledMenuItemLabel>{label}</StyledMenuItemLabel>
                {appendContent}
              </Flex>
              {bottomContent}
            </VFlex>
            {expandable && (
              <Flex flex="0" marginLeft="auto" paddingLeft="cmp-xs">
                <Icon size="xxs" iconId="arrow_right" />
              </Flex>
            )}
          </>
        )}
      </StyledMenuItemInner>
    </StyledMenuItem>
  );
};
