import * as React from 'react';

// declarations
import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledPolymorphicProps,
} from '../../declarations';

// styled
import {
  StyledBadge,
  StyledBadgeIcon,
  StyledBadgeProps,
  StyledBadgeText,
} from './StyledBadge';

export interface BadgeProps
  extends StyledPolymorphicProps,
    GlobalAttrProps,
    GlobalAriaProps,
    StyledBadgeProps {
  /** Defines if the Badge icon is bold */
  hasBoldIcon?: boolean;
  /** Tooltip on Badge hover.*/
  tooltip?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  colorScheme = 'neutral',
  hasAbsolutePosition = false,
  hasBoldIcon = false,
  iconName,
  inverse = false,
  size = 'md',
  text,
  ...nativeProps
}) => (
  <StyledBadge
    {...nativeProps}
    colorScheme={colorScheme}
    iconName={iconName}
    hasAbsolutePosition={hasAbsolutePosition}
    inverse={inverse}
    size={size}
    text={text}
  >
    {!text && iconName && (
      <StyledBadgeIcon
        aria-hidden={true}
        className={iconName ? `gi-${iconName}` : 'check_thick'}
        hasBoldIcon={hasBoldIcon}
        size={size}
      />
    )}
    {text && <StyledBadgeText>{text}</StyledBadgeText>}
  </StyledBadge>
);
