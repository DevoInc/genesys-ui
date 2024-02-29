import styled, { css } from 'styled-components';
import { camelCase } from 'lodash';

import { AVATAR_SIZE_BORDER_MAP } from '../constants';
import {
  TAvatarColorScheme,
  TAvatarFit,
  TAvatarSize,
  TAvatarVariant,
  TAvatarCustomSize,
} from '../declarations';

import { getAvatarSizeConfig } from '../utils';

import { typoMixin } from '../../../styled/';

export interface StyledAvatarContainerProps {
  /** If the Avatar has a border to differentiate it from the background. */
  bordered?: boolean;
  /** Color scheme: background color, text color, badge color scheme... etc. */
  colorScheme?: TAvatarColorScheme;
  /** The custom size (width and height) defined by an object.
   * If the variable square is defined, then it's assigned that value to the width and to the height. */
  customSize?: TAvatarCustomSize;
  /** If the Avatar has visual styles as disabled, and it gets that attribute if it's clickable. */
  $disabled?: boolean;
  /** The way of the background image fits the space */
  imageFit?: TAvatarFit;
  /** Path of the image file. */
  imageSrc?: string;
  /** The size of the avatar: a group of predefined width-height squared combinations. */
  size?: TAvatarSize;
  /** If the Avatar is clickable as a button or link. */
  isClickable?: boolean;
  /** The shape variant of the avatar: circular, square... etc. */
  variant?: TAvatarVariant;
}

export const StyledAvatarContainer = styled.span<StyledAvatarContainerProps>`
  ${({
    colorScheme,
    customSize,
    imageFit,
    imageSrc,
    isClickable,
    bordered,
    $disabled,
    size,
    theme,
    variant,
  }) => {
    const colorSchemeForTokens = camelCase(colorScheme);
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
    `;
  }}
`;
