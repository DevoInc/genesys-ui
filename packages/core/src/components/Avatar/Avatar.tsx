import * as React from 'react';

import {
  AVATAR_COLOR_SCHEME_DEFAULT_VALUE,
  AVATAR_IMAGE_FIT_DEFAULT_VALUE,
  AVATAR_IMAGE_POSITION_DEFAULT_VALUE,
  AVATAR_SIZE_BADGE_MAP,
  AVATAR_SIZE_DEFAULT_VALUE,
  AVATAR_VARIANT_DEFAULT_VALUE,
} from './constants';

import type { IDataAttrs } from '../../declarations';
import type { IAvatar } from './declarations';

import {
  AvatarBadge,
  AvatarContainer,
  type AvatarContainerProps,
  AvatarImage,
  AvatarInitials,
  AvatarSROnly,
} from './components';

import { Box } from '../Box';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AvatarProps
  extends IDataAttrs,
    Omit<
      AvatarContainerProps,
      'children' | 'aria-label' | 'disabled' | 'iconOnHover'
    >,
    Pick<
      IAvatar,
      | 'badge'
      | 'disabled'
      | 'iconOnHover'
      | 'initials'
      | 'name'
      | 'imageSrc'
      | 'imageFit'
      | 'imagePosition'
    > {}

export const InternalAvatar: React.FC<AvatarProps> = ({
  as,
  badge,
  colorScheme = AVATAR_COLOR_SCHEME_DEFAULT_VALUE,
  customSize,
  href,
  imageFit = AVATAR_IMAGE_FIT_DEFAULT_VALUE,
  imagePosition = AVATAR_IMAGE_POSITION_DEFAULT_VALUE,
  imageSrc,
  initials,
  bordered,
  disabled,
  name,
  onClick,
  role,
  size = AVATAR_SIZE_DEFAULT_VALUE,
  tooltip,
  variant = AVATAR_VARIANT_DEFAULT_VALUE,
  ...restContainerProps
}) => (
  <AvatarContainer
    {...restContainerProps}
    aria-label={name}
    as={as || (href ? 'a' : onClick ? 'button' : 'span')}
    bordered={bordered}
    colorScheme={colorScheme}
    customSize={customSize}
    disabled={disabled}
    href={href}
    imageFit={imageFit}
    imagePosition={imagePosition}
    imageSrc={imageSrc}
    onClick={onClick}
    role={role || (onClick ? 'button' : imageSrc ? 'img' : undefined)}
    size={size}
    tooltip={tooltip || name}
    variant={variant}
  >
    {imageSrc ? (
      <AvatarImage
        alt={name}
        customSize={customSize}
        src={imageSrc}
        size={size}
        variant={variant}
        imageFit={imageFit}
        imagePosition={imagePosition}
      />
    ) : (
      <AvatarInitials name={name} initials={initials} />
    )}
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
  _Image: typeof AvatarImage;
  _Initials: typeof AvatarInitials;
  _ScreenReadersOnly: typeof AvatarSROnly;
  _Badge: typeof AvatarBadge;
};

Avatar._Container = AvatarContainer;
Avatar._Image = AvatarImage;
Avatar._Initials = AvatarInitials;
Avatar._ScreenReadersOnly = AvatarSROnly;
Avatar._Badge = AvatarBadge;

InternalAvatar.displayName = 'Avatar';
Avatar._Container.displayName = 'Avatar._Container';
Avatar._Image.displayName = 'Avatar._Image';
Avatar._Initials.displayName = 'Avatar._Initials';
Avatar._ScreenReadersOnly.displayName = 'Avatar._ScreenReadersOnly';
Avatar._Badge.displayName = 'Avatar._Badge';
