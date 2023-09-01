import * as React from 'react';
import styled, { css } from 'styled-components';

import icons from '@devoinc/genesys-icons/dist/icon-variables.js';

import {
  iconFontMixin,
  pseudoElementOverlayMixin,
} from '../../../styled/mixins';
import { getAvatarSizeConfig, getVariantValue } from '../utils';
import { REL_FOR_BLANK_TARGET } from '../constants';
import { AvatarSize, AvatarVariant, CustomSize } from '../declarations';

export interface StyledAvatarWrapperClickableProps {
  /** The custom size (width and height) defined by an object.
   * If the variable square is defined, then it's assigned that value to the width and to the height. */
  customSize?: CustomSize;
  /** If the Avatar has a border to differentiate it from the background. */
  bordered?: boolean;
  /** If the Avatar has visual styles as disabled, and it gets that attribute if it's clickable. */
  disabled?: boolean;
  /** The size of the avatar: a group of predefined width-height squared combinations. */
  size?: AvatarSize;
  /** The shape variant of the avatar: circular, square... etc. */
  variant?: AvatarVariant;
  /** The target for the Avatar if it's used as a link, and it's defined its href prop */
  target?: React.HTMLAttributeAnchorTarget;
  /** Icon to be shown on hover-focus of the avatar.E.g. a pencil icon to denotate it's editable. */
  iconOnHover?: string;
  /** The href for the Avatar if it's used as a link. */
  href?: string;
}

export const StyledAvatarWrapperClickable = styled.button.attrs<StyledAvatarWrapperClickableProps>(
  ({ target }) => ({
    rel: target === '_blank' ? REL_FOR_BLANK_TARGET : undefined,
  }),
)<StyledAvatarWrapperClickableProps>`
  ${({ customSize, disabled, iconOnHover, bordered, size, theme, variant }) => {
    const sizeConfig = getAvatarSizeConfig({ customSize, size });
    const variantValue = getVariantValue(variant);

    return css`
      display: inline-flex;
      justify-content: center;
      align-items: center;
      position: relative;
      appearance: none;
      border: ${!bordered && 'none'};
      border-radius: ${variantValue};
      padding: 0;
      width: ${sizeConfig.width};
      height: ${sizeConfig.height};
      cursor: ${disabled ? 'not-allowed' : 'pointer'};

      ${!disabled &&
      css`
        &::after {
          ${pseudoElementOverlayMixin({
            content: `'${icons[iconOnHover] || ''}'`,
          })};
          ${iconFontMixin()};
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all ease 0.2s;
          border-radius: ${variantValue};
          background-color: transparent;
          color: #eee;
          font-size: 0.4rem;
          opacity: 0;
        }

        &:hover::after,
        &:focus::after {
          background-color: rgba(0, 0, 0, 0.36);
          opacity: 1;
          font-size: 2rem;
        }

        &:focus,
        &:focus-visible {
          box-shadow: ${theme.alias.elevation.boxShadow.base.focused};
        }
      `}
    `;
  }}
`;
