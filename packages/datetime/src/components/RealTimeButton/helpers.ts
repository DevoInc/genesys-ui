import { css, CSSProp, keyframes } from 'styled-components';

const fadeAnimation = keyframes`
  0% {
    opacity: 1;
  }
  30% {
    opacity: 0;
  }
  70% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const cssRealTimeButtonSpinner: CSSProp = css`
  animation:
    ${fadeAnimation} linear 3s infinite,
    ${rotateAnimation} linear 2s infinite;
`;
