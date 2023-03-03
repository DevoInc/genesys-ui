import * as React from 'react';
import styled, { css } from 'styled-components';

export interface StyledLayoutGridContentProps {
  height?: React.CSSProperties['height'];
  width?: React.CSSProperties['width'];
}

export const StyledLayoutGridContent = styled.div<StyledLayoutGridContentProps>`
  ${({ height, width }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #9be0c6;
    width: ${width || '100%'};
    height: ${height || '100%'};
    background-color: #e1faf2;
    color: #3c4952;
  `};
`;
