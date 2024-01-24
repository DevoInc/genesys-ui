import styled, { css } from 'styled-components';
import _ from 'lodash';

import icons from '@devoinc/genesys-icons/dist/icon-variables';

import { AVATAR_SIZE_BORDER_MAP } from '../constants';
import {
  AvatarColorScheme,
  AvatarFit,
  AvatarSize,
  AvatarVariant,
  CustomSize,
} from '../declarations';

import { getAvatarSizeConfig, getVariantValue } from '../utils';

import {
  iconFontMixin,
  pseudoElementOverlayMixin,
  typoMixin,
} from '../../../styled/';

export interface StyledAvatarContainerProps {
  /** If the Avatar has a border to differentiate it from the background. */
  bordered?: boolean;
  /** Color scheme: background color, text color, badge color scheme... etc. */
  colorScheme?: AvatarColorScheme;
  /** The custom size (width and height) defined by an object.
   * If the variable square is defined, then it's assigned that value to the width and to the height. */
  customSize?: CustomSize;
  /** If the Avatar has visual styles as disabled, and it gets that attribute if it's clickable. */
  $disabled?: boolean;
  /** Icon to be shown on hover-focus of the avatar.E.g. a pencil icon to denotate it's editable. */
  iconOnHover?: string;
  /** The way of the background image fits the space */
  imageFit?: AvatarFit;
  /** Path of the image file. */
  imageSrc?: string;
  /** The size of the avatar: a group of predefined width-height squared combinations. */
  size?: AvatarSize;
  /** If the Avatar is clickable as a button or link. */
  isClickable?: boolean;
  /** The shape variant of the avatar: circular, square... etc. */
  variant?: AvatarVariant;
}

export const StyledAvatarContainer = styled.span<StyledAvatarContainerProps>`
  ${({
    colorScheme,
    customSize,
    iconOnHover,
    imageFit,
    imageSrc,
    isClickable,
    bordered,
    $disabled,
    size,
    theme,
    variant,
  }) => {
    const colorSchemeForTokens = _.camelCase(colorScheme);
    const aliasTokens = theme?.alias;
    const bgColor =
      aliasTokens.color.background.feedback[colorSchemeForTokens].weak;
    const color = aliasTokens.color.text.feedback[colorSchemeForTokens].base;
    const width = getAvatarSizeConfig({ customSize, size }).width;
    const height = getAvatarSizeConfig({ customSize, size }).height;
    const borderRadius = {
      circle: '50%',
      rounded: '0.4rem',
    };
    const variantValue = getVariantValue(variant);
    // TODO: remove iconOnHoverEval after the QUV-2059 ticket is finished
    const iconOnHoverEval = iconOnHover?.replace('gi-', '');
    return css`
      ${typoMixin({ theme })};
      display: inline-flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      position: relative;
      opacity: ${$disabled && '0.4'};
      border-radius: ${borderRadius[variant]};
      padding: 0;
      width: ${width};
      height: ${height};
      background-color: ${bgColor};
      text-transform: uppercase;
      font-weight: bold;
      font-size: calc(${width} / 1.8);
      color: ${color};
      cursor: ${$disabled
        ? 'not-allowed'
        : isClickable
          ? 'pointer'
          : 'default'};

      ${imageSrc &&
      css`
        object-fit: ${imageFit};
        background-image: ${`url("${imageSrc}")`};
        background-size: ${imageFit};
        background-position: center;
        background-repeat: no-repeat;
      `}

      border: ${bordered
        ? `solid
          ${size ? AVATAR_SIZE_BORDER_MAP[size] : AVATAR_SIZE_BORDER_MAP.md}
          ${aliasTokens.color.border.separator.base.strongest}`
        : 'none'};

      ${!$disabled &&
      isClickable &&
      css`
        &::after {
          // TODO: remove iconOnHoverEval after the QUV-2059 ticket is finished
          ${pseudoElementOverlayMixin({
            content: `'${icons[iconOnHoverEval] || ''}'`,
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
