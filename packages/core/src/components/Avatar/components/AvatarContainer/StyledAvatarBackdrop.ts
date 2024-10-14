import styled, { css, DefaultTheme } from 'styled-components';

import type { TAvatarVariant } from '../../declarations';

import { getBorderRadius } from '../../utils';

export interface StyledAvatarBackdropProps {
  theme: DefaultTheme;
  $variant?: TAvatarVariant;
}

export const StyledAvatarBackdrop = styled.span<StyledAvatarBackdropProps>`
  ${({ theme, $variant }) => {
    const cmpTokens = theme.cmp.avatar.backdrop;
    return css`
      position: absolute;
      transition: all ease-in-out ${cmpTokens.mutation.transitionDuration};
      border-radius: ${getBorderRadius({ theme, $variant })};
      color: ${theme.meta.scheme === 'light'
        ? cmpTokens.color.text.lightScheme
        : cmpTokens.color.text.darkScheme};
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
        transition: all ease-in-out ${cmpTokens.mutation.transitionDuration};
        opacity: 1;
        font-size: ${cmpTokens.typo.fontSize};
        width: 100%;
        height: 100%;
        transform: scale(1);
      }

      *:focus > &,
      *:focus-visible > & {
        box-shadow: ${cmpTokens.elevation.boxShadow};
      }
    `;
  }};
`;
