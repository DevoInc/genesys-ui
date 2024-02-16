import { css, keyframes } from 'styled-components';

export const BOUNCE_ANIMATION = keyframes`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-30px);}
  60% {transform: translateY(-15px);}
`;

export const BOUNCE_DOT_ANIMATION = {
  SCALE: keyframes`
    0% {
      transform: scale(2,.8);
    }
    35% {

      transform: scale(1,1);
    }
  `,
  SHADOW: keyframes`
    0% {
      transform: scale(1.4, 1.2);
    }
    100% {
      transform: scale(.6, .3);
    }
  `,
  TRANSLATE: keyframes`
    0% {
      transform: translateY(2px);
    }
    100% {
      transform: translateY(-26px);
    }
  `,
};

export const FLOW_ANIMATION = {
  DELAY: css`
    &:nth-child(1) {
      animation-delay: 0.1s;
    }
    &:nth-child(2) {
      animation-delay: 0s;
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
    }
    &:nth-child(4) {
      animation-delay: 0.1s;
    }
    &:nth-child(5) {
      animation-delay: 0.3s;
    }
    &:nth-child(6) {
      animation-delay: 0.2s;
    }
    &:nth-child(7) {
      animation-delay: 0.35s;
    }
    &:nth-child(8) {
      animation-delay: 0.25s;
    }
  `,
  OPACITY: keyframes`
    0% {
      opacity: 0;
    }
    20%,
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  `,
  SCALE: keyframes`
    0% {
      transform: scale(1.5, 0.5) skewX(-10deg);
    }
    20%,
    80% {
      transform: scale(1, 1) skewX(0);
    }
    100% {
      transform: scale(1.5, 0.5) skewX(-10deg);
    }
  `,
  TRANSLATE: keyframes`
    0% {
      transform: translateX(-150px);
    }
    20%,
    80% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(150px);
    }
  `,
};

export const HEART_BEAT_ANIMATION = keyframes`
  0% {transform: scale(1);}
  14% {transform: scale(1.3);}
  28% {transform: scale(1);}
  42% {transform: scale(1.3);}
  70% {transform: scale(1);}
`;

export const JELLO_ANIMATION = keyframes`
  from,
  11.1%, to {transform: translate3d(0, 0, 0);}
  22.2% {transform: skewX(-12.5deg) skewY(-12.5deg);}
  33.3% {transform: skewX(6.25deg) skewY(6.25deg);}
  44.4% {transform: skewX(-3.125deg) skewY(-3.125deg);}
  55.5% {transform: skewX(1.5625deg) skewY(1.5625deg);}
  66.6% {transform: skewX(-0.78125deg) skewY(-0.78125deg);}
  77.7% {transform: skewX(0.390625deg) skewY(0.390625deg);}
  88.8% {transform: skewX(-0.1953125deg) skewY(-0.1953125deg);}
`;

export const RUBBER_BAND_ANIMATION = keyframes`
  0% {transform: scale(1);}
  30% {transform: scaleX(1.25) scaleY(0.75);}
  40% {transform: scaleX(0.75) scaleY(1.25);}
  60% {transform: scaleX(1.15) scaleY(0.85);}
  100% {transform: scale(1);}
`;

export const SHAKE_ANIMATION = keyframes`
  0%, 100% {transform: translateX(0);}
  10%, 30%, 50%, 70%, 90% {transform: translateX(-10px);}
  20%, 40%, 60%, 80% {transform: translateX(10px);}
`;

export const SWING_ANIMATION = keyframes`
  20% {transform: rotate(15deg);}
  40% {transform: rotate(-10deg);}
  60% {transform: rotate(5deg);}
  80% {transform: rotate(-5deg);}
  100% {transform: rotate(0deg);}
`;

export const TADA_ANIMATION = keyframes`
  0% {
    transform: scale3d(1, 1, 1);
  }
  10%, 20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }
  30%, 50%, 70%, 90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }
  40%, 60%, 80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
`;

export const WOBBLE_ANIMATION = keyframes`
  0% {transform: translateX(0%);}
  15% {transform: translateX(-25%) rotate(-5deg);}
  30% {transform: translateX(20%) rotate(3deg);}
  45% {transform: translateX(-15%) rotate(-3deg);}
  60% {transform: translateX(10%) rotate(2deg);}
  75% {transform: translateX(-5%) rotate(-1deg);}
  100% {transform: translateX(0%);}
`;
