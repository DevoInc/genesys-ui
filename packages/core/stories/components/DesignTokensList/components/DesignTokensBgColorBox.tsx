import * as React from 'react';

import { StyledDesignTokensBgColorBox } from './styled';

export interface DesignTokensBgColorBoxProps {
  color: React.CSSProperties['backgroundColor'];
}

export const DesignTokensBgColorBox: React.FC<DesignTokensBgColorBoxProps> = ({
  color,
}) => (
  <StyledDesignTokensBgColorBox>
    <div style={{ backgroundColor: color }} />
  </StyledDesignTokensBgColorBox>
);
