import { keyframes } from 'styled-components';
import { PickUnion } from '../../typeFunctions';
import { UIColorScheme, GlobalSize } from '../../';

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

export type SpinnerColorScheme =
  | UIColorScheme
  | 'brand'
  | 'dark'
  | 'darkTrans'
  | 'light'
  | 'lightTrans';

// Size - Prop values

export type SpinnerSize = PickUnion<
  GlobalSize,
  'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
>;

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

export const getSize = (size: SpinnerSize) =>
  SIZE_VALUES[size] || SIZE_VALUES.md;
