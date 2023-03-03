import * as React from 'react';
import styled, { css } from 'styled-components';

import { DESIGN_TOKEN_LIST_COLORS } from '../constants';

interface StyledDesignTokensCellProps {
  align?: React.CSSProperties['textAlign'];
  colSpan?: number;
}

export const StyledDesignTokensCell = styled.td<StyledDesignTokensCellProps>`
  padding: 0.6rem 1.2rem;
  border: none;
  vertical-align: middle;

  ${({ align }) => css`
    text-align: ${align || 'left'};
  `}

  strong {
    color: ${DESIGN_TOKEN_LIST_COLORS.TEXT_HEADING};
    font-family: 'Mono Font', monospace;
    font-weight: normal;
  }
`;
