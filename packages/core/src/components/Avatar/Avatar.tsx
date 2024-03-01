import * as React from 'react';

import { AVATAR_SIZE_BADGE_MAP } from './constants';

import {
  AvatarContainer,
  type AvatarContainerProps,
  AvatarInitials,
  type AvatarInitialsProps,
  AvatarSROnly,
} from './components';

import { Box } from '../Box';
import { Badge, type BadgeColorScheme, type BadgeSize } from '../Badge';

export interface AvatarProps
  extends Omit<AvatarContainerProps, 'children' | 'aria-label'>,
    AvatarInitialsProps {
  /** A Badge block to be shown over the Avatar. We recommend passing a function which renders a Badge
   * component, but you can render any component or node. The function has default values for 'size' and 'colorScheme'.
   * This Badge may be used to indicate status, presence... etc.*/
  badge?: (props: {
    colorScheme: BadgeColorScheme;
    size: BadgeSize;
  }) => React.ReactNode;
}

export const InternalAvatar: React.FC<AvatarProps> = ({
  as,
  badge,
  colorScheme = 'neutral',
  href,
  imageFit = 'cover',
  imageSrc,
  initials,
  bordered = false,
  disabled = false,
  name,
  onClick = undefined,
  role,
  size = 'md',
  tooltip,
  variant = 'circle',
  ...restContainerProps
}) => (
  <Avatar._Container
    {...restContainerProps}
    aria-label={name}
    as={as || (href ? 'a' : onClick ? 'button' : 'span')}
    bordered={bordered}
    colorScheme={colorScheme}
    disabled={disabled}
    href={href}
    imageFit={imageFit}
    imageSrc={imageSrc}
    onClick={onClick}
    role={role || (onClick ? 'button' : imageSrc ? 'img' : undefined)}
    size={size}
    tooltip={tooltip || name}
    variant={variant}
  >
    {!imageSrc && <Avatar._Initials name={name} initials={initials} />}
    <Avatar._ScreenReadersOnly>{name}</Avatar._ScreenReadersOnly>
    {badge && (
      <Box
        as="span"
        position="absolute"
        positionLeft="100%"
        positionTop="100%"
        cssTranslate={variant === 'circle' ? '-75%,-75%' : '-50%,-50%'}
        zIndex={1}
      >
        {badge({ size: AVATAR_SIZE_BADGE_MAP[size], colorScheme: 'info' })}
      </Box>
    )}
  </Avatar._Container>
);

export const Avatar = InternalAvatar as typeof InternalAvatar & {
  _Container: typeof AvatarContainer;
  _Initials: typeof AvatarInitials;
  _ScreenReadersOnly: typeof AvatarSROnly;
  _Badge: typeof Badge;
};

Avatar._Container = AvatarContainer;
Avatar._Initials = AvatarInitials;
Avatar._ScreenReadersOnly = AvatarSROnly;
Avatar._Badge = Badge;

InternalAvatar.displayName = 'Avatar';
