import styled, { css } from 'styled-components';

import { TSpinnerSize } from '../../../SpinnerLoader/constants';

export interface StyledButtonLoaderProps {
  /** Sets width, height, stroke... etc. */
  size?: TSpinnerSize;
}

export const StyledButtonLoader = styled.svg.attrs(() => ({
  viewBox: '0 0 50 50',
}))<StyledButtonLoaderProps>`
  ${({ size, theme }) => {
    const tokens = theme.cmp.button.loader;
    const square = tokens.size.width[size];
    return css`
      width: ${square};
      height: ${square};
    `;
  }}
`;
