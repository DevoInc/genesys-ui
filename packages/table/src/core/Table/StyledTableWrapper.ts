import * as React from 'react';
import styled, { css } from 'styled-components';
import { scrollbars } from '@devoinc/genesys-ui';

export interface StyledTableWrapperProps {
  maxHeight?: React.CSSProperties['maxHeight'];
  scrolled?: boolean;
}

export const StyledTableWrapper = styled.div<StyledTableWrapperProps>`
  display: inline-block;
  width: 100%;
`;
