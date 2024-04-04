import { keyframes } from 'styled-components';

/* --------------------------------------------------------------------------- *
 *                       KEYFRAMES - FILEPOND                                   *
 * --------------------------------------------------------------------------- */

/* Spin - Keyframes */
export const spinCssKeyFrame = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(359deg);
  }
`;

/* Fall - Keyframes */
export const fallCssKeyFrame = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
    animation-timing-function: ease-out;
  }
  70% {
    opacity: 1;
    transform: scale(1.1);
    animation-timing-function: ease-in-out;
  }
  100% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
`;

/* Shake - Keyframes */
export const shakeCssKeyFrame = keyframes`
  10%,
  90% {
    transform: translateX(-0.0625em);
  }
  20%,
  80% {
    transform: translateX(0.125em);
  }
  30%,
  50%,
  70% {
    transform: translateX(-0.25em);
  }
  40%,
  60% {
    transform: translateX(0.25em);
  }
`;
