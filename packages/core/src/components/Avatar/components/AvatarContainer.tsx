import * as React from 'react';
import { useTheme } from 'styled-components';

import type {
  IFocusEventAttrs,
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IImageAttrs,
  ILinkAttrs,
  IMouseEventAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
  ITriggerAriaAttrs,
} from '../../../declarations';

import { avatarBackdropMixin } from './mixins';
import { Overlay } from '../../Overlay';
import { Icon } from '../../Icon';
import {
  StyledAvatarContainer,
  type StyledAvatarContainerProps,
} from '../styled';

export interface AvatarContainerProps
  extends Omit<StyledAvatarContainerProps, '$disabled'>,
    IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs,
    IImageAttrs,
    ILinkAttrs,
    ITriggerAriaAttrs,
    IFocusEventAttrs,
    IMouseEventAttrs {
  disabled?: boolean;
  children: React.ReactNode;
  /** Icon to be shown on hover-focus of the avatar.E.g. a pencil icon to denote it's editable. */
  iconOnHover?: React.ReactNode;
}

export const AvatarContainer: React.FC<AvatarContainerProps> = ({
  bordered = false,
  children,
  colorScheme = 'neutral',
  href,
  iconOnHover,
  imageFit = 'cover',
  disabled = false,
  onClick = undefined,
  size = 'md',
  variant = 'circle',
  ...restProps
}) => {
  const theme = useTheme();
  const isClickable = href || onClick;
  return (
    <StyledAvatarContainer
      {...restProps}
      bordered={bordered}
      colorScheme={colorScheme}
      href={href}
      isClickable={isClickable}
      imageFit={imageFit}
      onClick={onClick}
      size={size}
      variant={variant}
      $disabled={disabled}
    >
      {isClickable && iconOnHover && (
        <Overlay
          opacity={0.4}
          bgColorScheme="dark"
          styles={avatarBackdropMixin({ theme, variant })}
        >
          <Icon size="2rem">{iconOnHover}</Icon>
        </Overlay>
      )}
      {children}
    </StyledAvatarContainer>
  );
};
