import * as React from 'react';

import type { MenuItemProps } from '../../../Menu/components';
import { Menu } from '../../../Menu';
import { HFlex } from '../../../HFlex';
import { Icon } from '../../../Icon';
import { Typography } from '../../../Typography';
import { ButtonGroup } from '../../../ButtonGroup';
import { StyledAppMenuPopoverItemIcon } from './StyledAppMenuPopoverItemIcon';
import { StyledAppMenuPopoverItemActions } from './StyledAppMenuPopoverItemActions';
import { useMenuItemPadding } from '../../../Menu/components/MenuItem/useMenuItemPadding';

export interface AppMenuPopoverItemProps
  extends Omit<
    MenuItemProps,
    'children' | 'bottomContent' | 'appendContent' | 'prependContent'
  > {
  /** The array of actions to be rendered at the end of the item */
  actions?: React.ReactNode[];
  /** The auxiliary text to be displayed below the label. */
  description?: string;
  /** If the icon has more prominent styles as background-color... etc. */
  featuredIcon?: boolean;
}

export const AppMenuPopoverItem: React.FC<AppMenuPopoverItemProps> = ({
  actions,
  description,
  featuredIcon,
  icon,
  label,
  unlimitedHeight,
  ...restMenuItemProps
}) => {
  const hasTitleAndDesc = Boolean(label && description);
  const isFeatured = hasTitleAndDesc || featuredIcon;

  const interactiveRef = React.useRef(null);
  const innerRef = React.useRef<HTMLButtonElement>(null);
  useMenuItemPadding(interactiveRef, innerRef);
  return (
    <Menu.Item._Wrapper {...restMenuItemProps}>
      <Menu.Item._Inner
        unlimitedHeight={unlimitedHeight || isFeatured}
        ref={innerRef}
      >
        <HFlex
          alignItems={hasTitleAndDesc ? 'flex-start' : 'center'}
          flex="1 1 auto"
          spacing="cmp-xs"
        >
          {featuredIcon ? (
            <StyledAppMenuPopoverItemIcon>
              <Icon size="sm" colorScheme="strong">
                {icon}
              </Icon>
            </StyledAppMenuPopoverItemIcon>
          ) : (
            <Icon size="sm" colorScheme="strong">
              {icon}
            </Icon>
          )}
          <HFlex.Item flex="1 1 auto">
            {label && (
              <Typography
                colorScheme={hasTitleAndDesc ? 'stronger' : 'strong'}
                format={hasTitleAndDesc ? 'action-sm' : 'body-sm'}
              >
                {label}
              </Typography>
            )}
            {description && (
              <Typography.Paragraph colorScheme="weak" size="sm">
                {description}
              </Typography.Paragraph>
            )}
          </HFlex.Item>
        </HFlex>
      </Menu.Item._Inner>
      {actions && (
        <StyledAppMenuPopoverItemActions ref={interactiveRef}>
          {Array.isArray(actions) ? (
            <ButtonGroup>
              {actions.map((action, idx) => (
                <ButtonGroup.Item key={idx}>{action}</ButtonGroup.Item>
              ))}
            </ButtonGroup>
          ) : (
            actions
          )}
        </StyledAppMenuPopoverItemActions>
      )}
    </Menu.Item._Wrapper>
  );
};
