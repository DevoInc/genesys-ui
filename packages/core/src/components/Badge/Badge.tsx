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
  icon,
  inverse = false,
  size = 'md',
  text,
  ...nativeProps
}) => (
  <StyledBadge
    {...nativeProps}
    colorScheme={colorScheme}
    icon={icon}
    hasAbsolutePosition={hasAbsolutePosition}
    inverse={inverse}
    size={size}
    text={text}
  >
    {!text && icon && (
      <StyledBadgeIcon
        aria-hidden={true}
        className={icon || 'gi-check_thick'}
        hasBoldIcon={hasBoldIcon}
        size={size}
      />
    )}
    {text && <StyledBadgeText>{text}</StyledBadgeText>}
  </StyledBadge>
);
