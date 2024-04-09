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
import type { IAvatar } from '../declarations';

import { avatarBackdropMixin } from './mixins';
import { AvatarContext } from '../context';
import { Overlay } from '../../Overlay';
import { Icon } from '../../Icon';
import {
  StyledAvatarContainer,
  type StyledAvatarContainerProps,
} from '../styled';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AvatarContainerProps
  extends IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs,
    IImageAttrs,
    ILinkAttrs,
    ITriggerAriaAttrs,
    IFocusEventAttrs,
    IMouseEventAttrs,
    Omit<StyledAvatarContainerProps, '$disabled'>,
    Pick<IAvatar, 'children' | 'disabled' | 'iconOnHover'> {}

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
      <AvatarContext.Provider value={{ size, variant }}>
        {children}
      </AvatarContext.Provider>
    </StyledAvatarContainer>
  );
};
