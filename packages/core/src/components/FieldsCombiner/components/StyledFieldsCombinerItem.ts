import * as React from 'react';
import styled, { css } from 'styled-components';

import type { FieldsCombinerOrder, FieldsCombinerType } from '../declarations';
import type { TFieldSize, TFieldStatus } from '../../../declarations';

export interface StyledFieldsCombinerItemProps {
  combinedButtons?: boolean;
  $width?: React.CSSProperties['width'];
  $order: FieldsCombinerOrder;
  componentType?: FieldsCombinerType;
  size: TFieldSize;
  status: TFieldStatus;
}

export const StyledFieldsCombinerItem = styled.div<StyledFieldsCombinerItemProps>`
  ${({
    combinedButtons,
    size,
    $width,
    $order,
    theme,
    componentType,
    status,
  }) => {
    const fieldTokens = theme.alias.fields;
    const btnTokens = theme.cmp.button;
    const height = btnTokens.size.height[size];
    const checkWidth = btnTokens.size.square[size];
    const borderRadius = fieldTokens.shape.borderRadius;

    return css`
      position: relative;
      height: ${height};
      width: ${$width};

      ${componentType === 'button' || componentType === 'check'
        ? css`
            z-index: 1;
            flex: 0 auto;
          `
        : css`
            flex: ${!$width && '1 1 100%'};
          `}

      ${componentType === 'check' &&
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
        width: ${checkWidth};
        padding: 0;
        background-color: ${theme.alias.color.background.surface.base.raised};

        ${$order === 'first'
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
        ${$order !== 'first' &&
        css`
          margin-left: -0.1rem;
        `}

        // states
        &:hover {
          z-index: 2;
        }
      `};

      // parent hover state
      ${componentType === 'check' &&
      css`
        *:hover > & {
          border-color: ${fieldTokens.color.border.base.hovered};
        }
      `}
    `;
  }};
`;
