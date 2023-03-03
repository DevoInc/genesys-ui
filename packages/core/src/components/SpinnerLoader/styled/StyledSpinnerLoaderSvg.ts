import styled, { css } from 'styled-components';

import { getSize, ROTATE_ANIMATION, SpinnerSize } from '../constants';

export interface StyledSpinnerLoaderSvgProps {
  size?: SpinnerSize;
}

export const StyledSpinnerLoaderSvg = styled.svg<StyledSpinnerLoaderSvgProps>`
  ${({ size }) => css`
    position: relative;
    animation: ${ROTATE_ANIMATION} 2s linear infinite;
    width: ${getSize(size)};
    height: ${getSize(size)};
  `};
`;
