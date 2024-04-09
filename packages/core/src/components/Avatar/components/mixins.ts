import { css, DefaultTheme } from 'styled-components';

import { getVariantValue } from '../utils';
import type { TAvatarVariant } from '../declarations';
import { StyledAvatarContainer } from '../styled';

export interface IAvatarBackdropMixin {
  theme: DefaultTheme;
  variant?: TAvatarVariant;
}

/**
 * Get the specific styles for Overlay component when it's used as a Avatar backdrop
 *
 * @return styles for Overlay component
 */
export const avatarBackdropMixin = ({
  theme,
  variant,
}: IAvatarBackdropMixin) => {
  const variantValue = getVariantValue(variant);
  return css`
    transition: all ease 0.2s;
    border-radius: ${variantValue};
    color: #eee;
    opacity: 0;
    transform: scale(0.1);
    transform-origin: center;

    ${StyledAvatarContainer}:hover > &,
    ${StyledAvatarContainer}:focus > &,
    ${StyledAvatarContainer}:focus-visible > & {
      opacity: 1;
      font-size: 2rem;
      width: 100%;
      height: 100%;
      transform: scale(1);
    }

    ${StyledAvatarContainer}:focus > &,
    ${StyledAvatarContainer}:focus-visible > & {
      box-shadow: ${theme.alias.elevation.boxShadow.base.focused};
    }
  `;
};
