import * as React from 'react';
import styled, { css } from 'styled-components';

import { StyledDesignTokensBox } from './StyledDesignTokensBox';

export interface StyledDesignTokensShadowBoxProps {
  boxShadow: React.CSSProperties['boxShadow'];
}

export const StyledDesignTokensShadowBox = styled(
  StyledDesignTokensBox
)<StyledDesignTokensShadowBoxProps>`
  ${({ boxShadow }) => css`
    box-shadow: ${boxShadow};
  `}
`;
