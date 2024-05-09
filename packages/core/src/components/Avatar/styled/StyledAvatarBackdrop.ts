import styled, { css, DefaultTheme } from 'styled-components';

import type { TAvatarVariant } from '../declarations';

import { getVariantValue } from '../utils';

export interface StyledAvatarBackdropProps {
  theme: DefaultTheme;
  variant?: TAvatarVariant;
}

export const StyledAvatarBackdrop = styled.span<StyledAvatarBackdropProps>`
  ${({ theme, variant }) => {
    const aliasTokens = theme.alias;
    const variantValue = getVariantValue(variant);
    return css`
      position: absolute;
      transition: all ease-in-out
        ${aliasTokens.mutation.transitionDuration.opacity.md};
      border-radius: ${variantValue};
      color: ${theme.meta.scheme === 'light'
        ? aliasTokens.color.text.body.inverse
        : aliasTokens.color.text.body.strong};
      opacity: 0;
      width: 100%;
      height: 100%;
      transform: scale(0.1);
      transform-origin: center;
      overflow: hidden;
      z-index: 1;

      *:hover > &,
      *:focus > &,
      *:focus-visible > & {
        transition: all ease-in-out
          ${aliasTokens.mutation.transitionDuration.opacity.md};
        opacity: 1;
        font-size: ${aliasTokens.size.square.icon.base.lg};
        width: 100%;
        height: 100%;
        transform: scale(1);
      }

      *:focus > &,
      *:focus-visible > & {
        box-shadow: ${theme.alias.elevation.boxShadow.base.focused};
      }
    `;
  }};
`;
