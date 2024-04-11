import styled, { css, DefaultTheme } from 'styled-components';

import type { TAvatarVariant } from '../declarations';

import { getVariantValue } from '../utils';

export interface StyledAvatarBackdropProps {
  theme: DefaultTheme;
  variant?: TAvatarVariant;
}

export const StyledAvatarBackdrop = styled.span<StyledAvatarBackdropProps>`
  ${({ theme, variant }) => {
    const variantValue = getVariantValue(variant);
    return css`
      transition: all ease-in-out 0.2s;
      border-radius: ${variantValue};
      color: #eee;
      opacity: 0;
      width: 100%;
      height: 100%;
      transform: scale(0.1);
      transform-origin: center;
      overflow: hidden;

      *:hover > &,
      *:focus > &,
      *:focus-visible > & {
        transition: all ease-in-out 0.2s;
        opacity: 1;
        font-size: 2rem;
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
