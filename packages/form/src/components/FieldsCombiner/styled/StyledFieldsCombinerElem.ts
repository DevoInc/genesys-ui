import * as React from 'react';
import styled, { css } from 'styled-components';

import { FieldsCombinerType } from '../declarations';
import { FieldSize, FieldStatus } from '@devoinc/genesys-ui';

export interface StyledFieldsCombinerElemProps {
  combinedButtons?: boolean;
  elemWidth?: React.CSSProperties['width'];
  first?: boolean;
  typeProp?: FieldsCombinerType;
  size: FieldSize;
  status: FieldStatus;
}

export const StyledFieldsCombinerElem = styled.div<StyledFieldsCombinerElemProps>`
  ${({ combinedButtons, size, elemWidth, first, theme, typeProp, status }) => {
    const fieldTokens = theme.alias.fields;
    const btnTokens = theme.cmp.button;
    const height = btnTokens.size.height[size];
    const width = btnTokens.size.square[size];
    const borderRadius = fieldTokens.shape.borderRadius;

    return css`
      position: relative;
      height: ${height};
      width: ${elemWidth};

      ${typeProp === 'button' || typeProp === 'check'
        ? css`
            z-index: 1;
            flex: 0 auto;
          `
        : css`
            flex: ${!elemWidth && '1 1 auto'};
          `}

      ${typeProp === 'check' &&
      css`
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 1;
        border-style: solid;
        border-color: ${fieldTokens.color.border[status]?.enabled};
        border-width: ${fieldTokens.shape.borderSize.base};
        border-radius: ${borderRadius};
        width: ${width};
        padding: 0;
        background-color: ${theme.alias.color.background.surface.base.raised};

        ${first
          ? css`
              border-top-right-radius: 0;
              border-bottom-right-radius: 0;
              border-right-width: 0;
            `
          : css`
              border-top-left-radius: 0;
              border-bottom-left-radius: 0;
              border-left-width: 0;
            `}

        &:focus {
          box-shadow: none;
        }
      `}

      ${!combinedButtons &&
      css`
        // Right elem
        ${!first &&
        css`
          margin-left: -0.1rem;
        `}

        // states
        &:hover {
          z-index: 2;
        }
      `};

      // parent hover state
      ${typeProp === 'check' &&
      css`
        *:hover > & {
          border-color: ${fieldTokens.color.border.base.hovered};
        }
      `}
    `;
  }};
`;
