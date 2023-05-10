import styled, { css } from 'styled-components';
import _ from 'lodash';

import {
  AvatarColorScheme,
  AvatarFit,
  AvatarSize,
  AvatarVariant,
  CustomSize,
} from '../declarations';
import { AVATAR_SIZE_BORDER_MAP } from '../constants';
import { typoMixin } from '../../../styled/';
import { getAvatarSizeConfig } from '../utils';

export interface StyledAvatarProps {
  /** Color scheme: background color, text color, badge color scheme... etc. */
  colorScheme?: AvatarColorScheme;
  /** The custom size (width and height) defined by an object.
   * If the variable square is defined, then it's assigned that value to the width and to the height. */
  customSize?: CustomSize;
  /** Id only used for tests */
  imageFit?: AvatarFit;
  /** Path of the image file. */
  imageSrc?: string;
  /** If the Avatar has a border to differentiate it from the background. */
  bordered?: boolean;
  /** If the Avatar has visual styles as disabled, and it gets that attribute if it's clickable. */
  $disabled?: boolean;
  /** The size of the avatar: a group of predefined width-height squared combinations. */
  size?: AvatarSize;
  /** The shape variant of the avatar: circular, square... etc. */
  variant?: AvatarVariant;
}

export const StyledAvatar = styled.span<StyledAvatarProps>`
  ${({
    colorScheme,
    customSize,
    imageFit,
    imageSrc,
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
    return css`
      ${typoMixin({ theme })};
      display: inline-flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      position: relative;
      opacity: ${$disabled && '0.4'};
      border-radius: ${borderRadius[variant]};
      width: ${width};
      height: ${height};
      background-color: ${bgColor};
      text-transform: uppercase;
      font-weight: bold;
      font-size: calc(${width} / 2.5);
      color: ${color};

      ${imageSrc &&
      css`
        object-fit: ${imageFit};
        padding-left: ${width};
        background-image: ${`url("${imageSrc}")`};
        background-size: ${imageFit};
        background-position: center;
        background-repeat: no-repeat;
      `}

      ${bordered &&
      css`
        border: solid
          ${size ? AVATAR_SIZE_BORDER_MAP[size] : AVATAR_SIZE_BORDER_MAP.md}
          ${aliasTokens.color.border.separator.base.strongest};
      `};
    `;
  }}
`;
