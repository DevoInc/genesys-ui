import * as React from 'react';

import { AVATAR_SIZE_BADGE_MAP } from './constants';

import type { TAvatarBadgeFn } from './declarations';

import {
  AvatarBadge,
  AvatarContainer,
  type AvatarContainerProps,
  AvatarInitials,
  type AvatarInitialsProps,
  AvatarSROnly,
} from './components';

import { Box } from '../Box';

export interface AvatarProps
  extends Omit<AvatarContainerProps, 'children' | 'aria-label'>,
    AvatarInitialsProps {
  /** A Badge block to be shown over the Avatar. We recommend passing a function which renders a Badge
   * component, but you can render any component or node. The function has default values for 'size' and 'colorScheme'.
   * This Badge may be used to indicate status, presence... etc.*/
  badge?: TAvatarBadgeFn;
}

export const InternalAvatar: React.FC<AvatarProps> = ({
  as,
  badge,
  colorScheme = 'info',
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
  <AvatarContainer
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
    {!imageSrc && <AvatarInitials name={name} initials={initials} />}
    <AvatarSROnly>{name}</AvatarSROnly>
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
  </AvatarContainer>
);

export const Avatar = InternalAvatar as typeof InternalAvatar & {
  _Container: typeof AvatarContainer;
  _Initials: typeof AvatarInitials;
  _ScreenReadersOnly: typeof AvatarSROnly;
  _Badge: typeof AvatarBadge;
};

Avatar._Container = AvatarContainer;
Avatar._Initials = AvatarInitials;
Avatar._ScreenReadersOnly = AvatarSROnly;
Avatar._Badge = AvatarBadge;

InternalAvatar.displayName = 'Avatar';
Avatar._Container.displayName = 'Avatar._Container';
Avatar._Initials.displayName = 'Avatar._Initials';
Avatar._ScreenReadersOnly.displayName = 'Avatar._ScreenReadersOnly';
Avatar._Badge.displayName = 'Avatar._Badge';
