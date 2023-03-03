import * as React from 'react';
import styled, { css } from 'styled-components';

export interface StyledMenuNavProps {
  /** Flex of menu. */
  flex: React.CSSProperties['flex'];
  /** Margin of menu. */
  margin: React.CSSProperties['margin'];
}

export const StyledMenuNav = styled.nav<StyledMenuNavProps>`
  ${({ flex, margin }) => css`
    position: relative;
    flex: ${flex};
    margin: ${margin};
  `}
`;
