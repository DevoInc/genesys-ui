import * as React from 'react';

import {
  StyledDesignTokensShadowBox,
  StyledDesignTokensShadowBoxProps,
} from './styled';

export const DesignTokensShadowBox: React.FC<
  StyledDesignTokensShadowBoxProps
> = ({ boxShadow }) => <StyledDesignTokensShadowBox boxShadow={boxShadow} />;
