import * as React from 'react';
import styled, { css } from 'styled-components';

export interface StyledToolbarGroupProps {
  padding?: React.CSSProperties['padding'];
  zIndex?: React.CSSProperties['zIndex'];
}

export const StyledToolbarGroup = styled.ul<StyledToolbarGroupProps>`
  ${({ padding, theme, zIndex }) => {
    const aliasTokens = theme.tokens.alias;
    return css`
      display: flex;
      align-items: center;
      align-self: stretch;
      flex: 1 1 auto;
      padding: ${padding || `0 ${aliasTokens.space.cmp.sm}`};
      z-index: ${zIndex};
      background: ${aliasTokens.color.background.surface.base.base};

      &:first-child {
        li:first-child {
          flex-shrink: 1;

          button {
            max-width: 29rem;

            span {
              flex: 1;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }

            i {
              white-space: nowrap;
            }
          }
        }

        li:not(:first-child) {
          flex-shrink: 0;
        }
      }

      &:nth-child(2) {
        justify-content: center;
      }

      &:last-child {
        justify-content: flex-end;
      }
    `;
  }}
`;
