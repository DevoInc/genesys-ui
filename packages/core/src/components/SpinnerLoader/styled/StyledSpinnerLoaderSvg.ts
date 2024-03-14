import styled, { css } from 'styled-components';

import { getSize, ROTATE_ANIMATION } from '../constants';
import { TSpinnerSize } from '../declarations';

interface StyledSpinnerLoaderSvgProps {
  size?: TSpinnerSize;
}

export const StyledSpinnerLoaderSvg = styled.svg<StyledSpinnerLoaderSvgProps>`
  ${({ size }) => css`
    position: relative;
    animation: ${ROTATE_ANIMATION} 2s linear infinite;
    width: ${getSize(size)};
    height: ${getSize(size)};
  `};
`;
