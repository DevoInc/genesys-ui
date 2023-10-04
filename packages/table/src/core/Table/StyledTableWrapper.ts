import * as React from 'react';
import styled, { css } from 'styled-components';
import { scrollbars } from '@devoinc/genesys-ui';

export interface StyledTableWrapperProps {
  maxHeight?: React.CSSProperties['maxHeight'];
  scrolled?: boolean;
}

export const StyledTableWrapper = styled.div<StyledTableWrapperProps>`
  display: block;

  ${({ theme }) => {
    return css`
      ${scrollbars({ theme })}
    `;
  }}
  overflow-x: auto;

  ${({ scrolled }) => {
    return css`
      overflow-y: ${scrolled ? 'auto' : 'visible'};
    `;
  }}

  ${({ maxHeight = '100%' }) => {
    return css`
      max-height: ${maxHeight};
    `;
  }}
`;
