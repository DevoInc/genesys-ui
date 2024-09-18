import styled, { css } from 'styled-components';
import { camelCase } from 'lodash';

import { typoMixin } from '../../../../styled';
import { getAccTextColor, isValidColor } from '../../../../helpers';
import type { ITag } from '../../declarations';

export interface StyledTagContainerProps {
  $colorScheme?: ITag['colorScheme'];
  $bold?: boolean;
  $quiet?: boolean;
  $wide?: boolean;
  $size?: ITag['size'];
}

export const StyledTagContainer = styled.span<StyledTagContainerProps>`
  ${({
    $colorScheme = 'neutral',
    $bold,
    $quiet,
    $wide,
    $size = 'md',
    theme,
  }) => {
    const colorSchemeForTokens = camelCase($colorScheme);

    const isBlendColorScheme =
      $colorScheme === 'blend-base' || $colorScheme === 'blend-inverse';
    const quietColorScheme = isBlendColorScheme ? $colorScheme : 'neutral';
    const cmpTokens = theme.cmp.tag;

    const colorBackground = $quiet ? 'quiet' : colorSchemeForTokens;
    const colorText = $quiet ? quietColorScheme : colorSchemeForTokens;

    const bgColor = isValidColor($colorScheme)
      ? $colorScheme
      : cmpTokens.color.background[colorBackground];
    const textColor = isValidColor($colorScheme)
      ? getAccTextColor($colorScheme, '#fff', cmpTokens.color.text.help)
      : cmpTokens.color.text[colorText];
    return css`
      ${typoMixin({ $bold, theme, $size })};
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      overflow: hidden;
      border-radius: ${cmpTokens.shape.borderRadius};
      max-width: 100%;
      height: ${cmpTokens.size.height[$size]};
      padding: ${$quiet ? '0' : `0 ${cmpTokens.space.padding.hor[$size]}`};
      background-color: ${bgColor};
      color: ${textColor};

      ${$wide &&
      css`
        display: flex;
        flex: 1 1 100%;
      `};
    `;
  }}
`;
