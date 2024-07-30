import { keyframes } from 'styled-components';

import type { TSpinnerSize } from './declarations';

// ANIMATIONS - CONSTANTS --------------------------------------------------- //

// Dash - Animation

export const DASH_ANIMATION = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -43;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -132;
  }
`;

// Rotate - Animation

export const ROTATE_ANIMATION = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

// PROP VALUES - CONSTANTS -------------------------------------------------- //

// Color Scheme - Prop values

// GET - CONSTANTS ---------------------------------------------------------- //
const SIZE_VALUES = {
  xxxs: '1.2rem',
  xxs: '1.6rem',
  xs: '2rem',
  sm: '2.4rem',
  md: '2.8rem',
  lg: '3.2rem',
  xl: '4.4rem',
} as const;

export const getSize = (size: TSpinnerSize) =>
  SIZE_VALUES[size] || SIZE_VALUES.md;
