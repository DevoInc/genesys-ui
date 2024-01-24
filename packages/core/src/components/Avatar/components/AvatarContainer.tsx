import * as React from 'react';

import {
  FocusEventAttrProps,
  GlobalAriaProps,
  GlobalAttrProps,
  ImageAttrProps,
  LinkAttrProps,
  MouseEventAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
  TriggerAriaProps,
} from '../../../declarations';

import { StyledAvatarContainer, StyledAvatarContainerProps } from '../styled';

export interface AvatarContainerProps
  extends Omit<StyledAvatarContainerProps, '$disabled'>,
    StyledPolymorphicProps,
    StyledOverloadCssProps,
    GlobalAttrProps,
    GlobalAriaProps,
    ImageAttrProps,
    LinkAttrProps,
    TriggerAriaProps,
    FocusEventAttrProps,
    MouseEventAttrProps {
  disabled?: boolean;
  children: React.ReactNode;
}

export const AvatarContainer: React.FC<AvatarContainerProps> = ({
  bordered = false,
  children,
  colorScheme = 'neutral',
  href,
  imageFit = 'cover',
  disabled = false,
  onClick = undefined,
  size = 'md',
  variant = 'circle',
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
      imageFit={imageFit}
      onClick={onClick}
      size={size}
      variant={variant}
      $disabled={disabled}
    >
      {children}
    </StyledAvatarContainer>
  );
};