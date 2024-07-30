import styled, { css } from 'styled-components';
import { camelCase } from 'lodash';

import { AVATAR_SIZE_BORDER_MAP } from '../../constants';
import type { IAvatar } from '../../declarations';

import { getAvatarSizeConfig } from '../../utils';

import { typoMixin } from '../../../../styled/';

export interface StyledAvatarContainerProps
  extends Pick<
    IAvatar,
    | 'bordered'
    | 'colorScheme'
    | 'customSize'
    | 'isClickable'
    | 'size'
    | 'variant'
  > {
  /** If the Avatar has visual styles as disabled, and it gets that attribute if it's clickable. */
  $disabled?: boolean;
}

export const StyledAvatarContainer = styled.span<StyledAvatarContainerProps>`
  ${({
    colorScheme,
    customSize,
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
    const borderRadius =
      aliasTokens.shape.borderRadius[
        variant === 'circle' ? 'full' : variant === 'rounded' ? 'md' : '0'
      ];
    return css`
      ${typoMixin({ theme })};
      display: inline-flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      position: relative;
      opacity: ${$disabled && '0.4'};
      border: ${bordered
        ? `solid
          ${size ? AVATAR_SIZE_BORDER_MAP[size] : AVATAR_SIZE_BORDER_MAP.md}
          ${aliasTokens.color.border.separator.base.strongest}`
        : 'none'};
      border-radius: ${borderRadius};
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
    `;
  }}
`;
