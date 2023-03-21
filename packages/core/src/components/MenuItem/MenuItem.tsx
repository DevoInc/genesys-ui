import * as React from 'react';

// declarations
import {
  ButtonAttrProps,
  GlobalAriaProps,
  GlobalAttrProps,
  LayoutAttrProps,
  LinkAttrProps,
  NavigationAriaProps,
  SelectionScheme,
  StyledPolymorphicProps,
  TriggerAriaProps,
} from '../../declarations';

// styled
import {
  StyledMenuItem,
  StyledMenuItemInner,
  StyledMenuItemLabel,
  StyledMenuItemMarker,
  StyledMenuItemInnerProps,
} from './styled';
import { Icon } from '../Icon';
import { useTheme } from 'styled-components';
import { menuItemSizeConfig } from './constants';

export interface MenuItemProps
  extends StyledPolymorphicProps,
    Pick<GlobalAttrProps, 'id' | 'title'>,
    GlobalAriaProps,
    TriggerAriaProps,
    LayoutAttrProps,
    LinkAttrProps,
    NavigationAriaProps,
    Pick<ButtonAttrProps, 'name' | 'value'>,
    StyledMenuItemInnerProps {
  children?: React.ReactNode;
  icon?: string;
  label?: string;
  selectionScheme?: SelectionScheme;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  as,
  forwardedAs,
  children,
  download,
  href,
  hasExtraLeftSpace,
  icon,
  label,
  rel,
  selectionScheme,
  state = 'enabled',
  tabIndex,
  target,
  ...restNativeProps
}) => {
  const theme = useTheme();
  const isLink = href || target || rel || download;
  const isDisabled = state === 'disabled';
  const isSelectable = Boolean(selectionScheme);
  const isSelected = state === 'selected';
  const iconSize = menuItemSizeConfig(theme).iconSize;
  return (
    <StyledMenuItem as={as} forwardedAs={forwardedAs}>
      <StyledMenuItemInner
        {...restNativeProps}
        aria-label={label}
        aria-checked={Boolean(selectionScheme) && isSelected}
        as={isLink ? 'a' : isSelectable ? 'label' : 'button'}
        disabled={!isLink && isDisabled}
        download={download}
        hasExtraLeftSpace={hasExtraLeftSpace || Boolean(icon) || isSelected}
        href={isDisabled ? null : href}
        rel={rel}
        role={
          selectionScheme === 'single'
            ? 'menuitemradio'
            : selectionScheme === 'multiple'
            ? 'menuitemcheckbox'
            : 'menuitem'
        }
        state={state}
        tabIndex={tabIndex}
        target={target}
      >
        {children || (
          <>
            {(icon || isSelected) && (
              <StyledMenuItemMarker>
                <Icon
                  iconId={isSelected ? 'check_thick' : icon}
                  size={iconSize}
                />
              </StyledMenuItemMarker>
            )}
            <StyledMenuItemLabel>{label}</StyledMenuItemLabel>
          </>
        )}
      </StyledMenuItemInner>
    </StyledMenuItem>
  );
};
