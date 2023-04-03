import styled, { css } from 'styled-components';
import * as React from 'react';

export interface StyledToolbarItemProps {
  $height?: React.CSSProperties['height'];
  asSeparator?: boolean;
}

export const StyledToolbarItem = styled.li<StyledToolbarItemProps>`
  ${({ $height, asSeparator, theme }) => {
    const aliasTokens = theme.alias;
    return css`
      margin: 0 ${aliasTokens.space.cmp.xs};
      height: ${$height};

      ${!asSeparator
        ? css`
            &:first-child {
              margin-left: 0;
            }
            &:last-child {
              margin-right: 0;
            }
          `
        : css`
            border-left-width: ${aliasTokens.shape.borderSize.separator.md};
            border-style: solid;
            height: 2rem;
            margin: 0 ${aliasTokens.space.cmp.xxs};
            border-color: ${aliasTokens.color.border.separator.base.base};
          `}
    `;
  }}
`;
