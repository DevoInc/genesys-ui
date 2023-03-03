import * as React from 'react';
import styled, { css } from 'styled-components';

import { StyledDesignTokensBox } from './StyledDesignTokensBox';

export interface StyledDesignTokensBorderBoxProps {
  border?: React.CSSProperties['border'];
  borderColor?: React.CSSProperties['borderColor'];
  borderSize?: React.CSSProperties['borderWidth'];
  borderStyle?: React.CSSProperties['borderStyle'];
}

export const StyledDesignTokensBorderBox = styled(
  StyledDesignTokensBox
)<StyledDesignTokensBorderBoxProps>`
  ${({
    border,
    borderColor = 'gray',
    borderSize = '0.2rem',
    borderStyle = 'solid',
  }) => css`
    border: ${border ? border : `${borderStyle} ${borderSize} ${borderColor}`};
  `}
`;
