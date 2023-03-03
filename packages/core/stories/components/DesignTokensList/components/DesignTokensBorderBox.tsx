import * as React from 'react';

import {
  StyledDesignTokensBorderBox,
  StyledDesignTokensBorderBoxProps,
} from './styled';

export const DesignTokensBorderBox: React.FC<
  StyledDesignTokensBorderBoxProps
> = ({ border, borderColor, borderSize, borderStyle }) => (
  <StyledDesignTokensBorderBox
    border={border}
    borderColor={borderColor}
    borderSize={borderSize}
    borderStyle={borderStyle}
  />
);
