import * as React from 'react';

import {
  StyledDesignTokensColorBox,
  StyledDesignTokensColorBoxProps,
} from './styled';

export const DesignTokensColorBox: React.FC<
  StyledDesignTokensColorBoxProps
> = ({ color }) => (
  <StyledDesignTokensColorBox color={color}>
    Genesys token
  </StyledDesignTokensColorBox>
);
