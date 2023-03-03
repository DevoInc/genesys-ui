import * as React from 'react';
import styled, { css } from 'styled-components';

const { DESIGN_TOKEN_LIST_COLORS } = require('../../constants');

import { StyledDesignTokensBox } from './StyledDesignTokensBox';

export interface StyledDesignTokensSizeBoxProps {
  borderRadius?: React.CSSProperties['borderRadius'];
  size?: string;
}

export const StyledDesignTokensSizeBox = styled(
  StyledDesignTokensBox
)<StyledDesignTokensSizeBoxProps>`
  ${({ size, borderRadius }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: ${borderRadius};
      width: ${size};
      height: ${size};
      background-color: ${DESIGN_TOKEN_LIST_COLORS[
        borderRadius ? 'BG_SHAPE' : 'BG_LAYOUT'
      ]};
      font-size: 1.2rem;
      font-weight: bold;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: ${DESIGN_TOKEN_LIST_COLORS.TEXT_WEAK};
    `;
  }}
`;
