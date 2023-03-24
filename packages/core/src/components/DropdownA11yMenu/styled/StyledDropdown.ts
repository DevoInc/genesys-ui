import * as React from 'react';
import styled, { css } from 'styled-components';

interface StyledDropdownProps {
  zIndex?: number; // TODO: this should be React.CSSProperties['zIndex']
  maxWidth?: React.CSSProperties['maxWidth'];
}

export const StyledDropdown = styled.ul<StyledDropdownProps>`
  ${({ maxWidth, zIndex, theme }) => {
    const aliasTokens = theme.alias;
    return css`
      position: relative;
      list-style: none;
      padding: 1.2rem 1.6rem;
      box-shadow: ${aliasTokens.elevation.boxShadow.depth.activated};
      width: 100%;
      font-size: 1.3rem;
      border-radius: 0.6rem;
      background-color: ${aliasTokens.color.background.surface.base.base};
      z-index: ${zIndex + theme.alias.elevation.zIndex.depth.activated};
      max-width: ${maxWidth ?? '24rem'};
    `;
  }}
`;
