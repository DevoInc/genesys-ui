import * as React from 'react';

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
} from '../../../../declarations';
import type { IAvatar } from '../../declarations';
import {
  AVATAR_COLOR_SCHEME_DEFAULT_VALUE,
  AVATAR_SIZE_DEFAULT_VALUE,
  AVATAR_VARIANT_DEFAULT_VALUE,
} from '../../constants';
import { AvatarContext } from '../../context';
import { Overlay } from '../../../Overlay';
import { Icon } from '../../../Icon';
import {
  StyledAvatarContainer,
  type StyledAvatarContainerProps,
} from './StyledAvatarContainer';
import { StyledAvatarBackdrop } from './StyledAvatarBackdrop';

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
    Pick<
      IAvatar,
      | 'children'
      | 'disabled'
      | 'iconOnHover'
      | 'imageFit'
      | 'imagePosition'
      | 'imageSrc'
    > {}

export const AvatarContainer: React.FC<AvatarContainerProps> = ({
  bordered,
  children,
  colorScheme = AVATAR_COLOR_SCHEME_DEFAULT_VALUE,
  href,
  iconOnHover,
  imageFit,
  imagePosition,
  imageSrc,
  disabled,
  onClick,
  size = AVATAR_SIZE_DEFAULT_VALUE,
  tooltip,
  variant = AVATAR_VARIANT_DEFAULT_VALUE,
  ...restProps
}) => {
  const isClickable = href || onClick;
  return (
    <StyledAvatarContainer
      {...restProps}
      bordered={bordered}
      colorScheme={colorScheme}
      href={href}
      isClickable={isClickable}
      onClick={onClick}
      size={size}
      variant={variant}
      $disabled={disabled}
      title={tooltip}
    >
      {isClickable && iconOnHover && (
        <StyledAvatarBackdrop variant={variant}>
          <Overlay opacity={0.4} bgColorScheme="dark">
            <Icon size="2rem">{iconOnHover}</Icon>
          </Overlay>
        </StyledAvatarBackdrop>
      )}
      <AvatarContext.Provider
        value={{ imageFit, imagePosition, imageSrc, size, variant }}
      >
        {children}
      </AvatarContext.Provider>
    </StyledAvatarContainer>
  );
};
