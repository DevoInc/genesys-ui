import * as React from 'react';

import { Box } from '../';
import { StyledScreenReadersOnly } from '../../styled';
import { getAvatarInitials } from './utils';
import {
  StyledAvatar,
  StyledAvatarProps,
  StyledAvatarWrapperClickable,
  StyledAvatarWrapperClickableProps,
} from './styled';
import { AvatarBadge } from './declarations';
import {
  GlobalAriaProps,
  GlobalAttrProps,
  ImageAttrProps,
  StyledPolymorphicProps,
  TriggerAriaProps,
} from '../../declarations';

export interface AvatarProps
  extends Omit<StyledAvatarProps, '$disabled'>,
    StyledAvatarWrapperClickableProps,
    //native
    StyledPolymorphicProps,
    GlobalAttrProps,
    GlobalAriaProps,
    ImageAttrProps,
    // StyledAvatarWrapperClickable
    TriggerAriaProps {
  /** A Badge block to be shown over the Avatar. We recommend passing a Badge
   * component, but you can pass any component or node. This Badge may be used
   * to indicate status, presence... etc.*/
  badge?: AvatarBadge | React.ReactNode;
  /** If there is no image provided you can use instead one or two characters (as maximum) as a content. */
  initials?: string;
  /** Name of the Avatar used for image alt, default initials, aria-label... etc. */
  name?: string;
  /** The function to be triggered on click event. */
  onClick?: () => void;
  /** If avatar disabled*/
  disabled?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({
  'aria-controls': ariaControls,
  'aria-expanded': ariaExpanded,
  'aria-haspopup': ariaHasPopup,
  as,
  badge,
  className,
  colorScheme = 'neutral',
  customSize,
  href,
  iconOnHover,
  imageFit = 'cover',
  imageSrc,
  initials,
  bordered = false,
  disabled = false,
  name,
  onClick = undefined,
  size = 'md',
  target,
  tooltip,
  variant = 'circle',
  ...styledProps
}) => {
  const isClickable = href || onClick;

  const avatarContent = (
    <StyledAvatar
      {...(!isClickable && { ...styledProps })}
      aria-label={name}
      as={as}
      className={className && `${className}__img`}
      colorScheme={colorScheme}
      customSize={customSize}
      imageFit={imageFit}
      imageSrc={imageSrc}
      bordered={bordered}
      $disabled={disabled}
      role={imageSrc ? 'img' : undefined}
      size={size}
      title={tooltip || name}
      variant={variant}
    >
      {!imageSrc && (
        <span aria-hidden="true">{getAvatarInitials({ initials, name })}</span>
      )}
      <StyledScreenReadersOnly>{name}</StyledScreenReadersOnly>
      {badge && (
        <Box
          as="span"
          position="absolute"
          positionLeft="100%"
          positionTop="100%"
          cssTranslate={variant === 'circle' ? '-75%,-75%' : '-50%,-50%'}
          zIndex={1}
        >
          {badge as React.ReactNode}
        </Box>
      )}
    </StyledAvatar>
  );

  return isClickable ? (
    <StyledAvatarWrapperClickable
      {...styledProps}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      aria-haspopup={ariaHasPopup}
      as={as || (href ? 'a' : 'button')}
      className={className}
      customSize={customSize}
      href={href}
      iconOnHover={iconOnHover}
      disabled={disabled}
      bordered={bordered}
      onClick={onClick}
      size={size}
      target={target}
      title={tooltip || name}
      variant={variant}
    >
      {avatarContent}
    </StyledAvatarWrapperClickable>
  ) : (
    avatarContent
  );
};
