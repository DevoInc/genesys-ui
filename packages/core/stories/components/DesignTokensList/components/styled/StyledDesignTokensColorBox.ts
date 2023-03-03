import * as React from 'react';
import styled, { css } from 'styled-components';

export interface StyledDesignTokensColorBoxProps {
  color: React.CSSProperties['color'];
}

export const StyledDesignTokensColorBox = styled.div<StyledDesignTokensColorBoxProps>`
  ${({ color }) => css`
    color: ${color};
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
  `}
`;
