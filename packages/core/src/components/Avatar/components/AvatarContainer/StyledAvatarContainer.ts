import styled, { css } from 'styled-components';

import type { IAvatarStyled } from '../../declarations';

import { getAvatarSizeConfig } from '../../utils';

import { typoMixin } from '../../../../styled/';
import { getTokenKeyFromColorScheme } from '../../../../helpers';

export interface StyledAvatarContainerProps
  extends Pick<
    IAvatarStyled,
    | '$bordered'
    | '$colorScheme'
    | '$customSize'
    | '$isClickable'
    | '$size'
    | '$variant'
    | '$disabled'
  > {}

export const StyledAvatarContainer = styled.span<StyledAvatarContainerProps>`
  ${({
    $colorScheme,
    $customSize,
    $isClickable,
    $bordered,
    $disabled,
    $size,
    theme,
    $variant,
  }) => {
    const colorSchemeForTokens = getTokenKeyFromColorScheme($colorScheme);
    const cmpTokens = theme.cmp.avatar;
    const bgColor = cmpTokens.color.background[colorSchemeForTokens];
    const color = cmpTokens.color.text[colorSchemeForTokens];
    const width = getAvatarSizeConfig({ $customSize, $size, theme }).width;
    const height = getAvatarSizeConfig({ $customSize, $size, theme }).height;
    const borderRadius =
      $variant !== 'square' ? cmpTokens.shape.borderRadius[$variant] : 0;
    return css`
      ${typoMixin({ theme })};
      display: inline-flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      position: relative;
      opacity: ${$disabled && '0.4'};
      border: ${$bordered
        ? `solid ${cmpTokens.shape.borderSize.bordered[$size || 'md']}
          ${cmpTokens.color.border}`
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
        : $isClickable
          ? 'pointer'
          : 'default'};
    `;
  }}
`;
